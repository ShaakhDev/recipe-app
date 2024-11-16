import {useHandleError} from './use-handle-error';

interface RequestReturnType {
  data?: Partial<any> | void;
  error?: any;
}

interface Params {
  request: () => Promise<RequestReturnType | void>;
  onSuccess?: (data?: RequestReturnType['data']) => Promise<void> | void;
  onError?: (error?: any) => Promise<void> | void;
}

export const useHandleRequest: () => ({
  request,
  onSuccess,
  onError,
}: Params) => Promise<void> = () => {
  const handleError = useHandleError();

  return async ({request, onSuccess, onError}: Params) => {
    try {
      const result = await request();

      if (result?.error) {
        if (onError) {
          void onError(result.error);
        }

        handleError(result.error);

        return;
      }

      if (onSuccess) {
        await onSuccess(result?.data);
      }
    } catch (ex) {
      handleError(ex);
      console.error(ex);
    }
  };
};
