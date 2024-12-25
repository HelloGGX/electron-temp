import { axios } from "@/lib/axios";
import type { MutationConfig } from "@/lib/vue-query";
import { useLoginStoreHook } from "@/stores/login";
import { useMutation } from "@tanstack/vue-query";
import type { ErrorType } from "../type";

type loginParam = {
  /** 用户名 */
  userName: string;
  /** 密码 */
  userPwd: string;
};
interface LoginResponse extends ErrorType {
  data?: {
    loginSuc: boolean;
  };
}
export const postLogin = (data: loginParam): Promise<LoginResponse> => {
  return axios.post("/api/login", {
    ...data,
  });
};

type UsePostLoginOption = {
  config?: MutationConfig<typeof postLogin>;
};

export const useLogin = ({ config }: UsePostLoginOption = {}) => {
  const router = useRouter();
  const store = useLoginStoreHook();
  return useMutation({
    mutationFn: postLogin,
    onSuccess(data: LoginResponse) {
      if (data.code === "SUCCESS" && data.data?.loginSuc) {
        store.patchLogin(true);
        router.replace({
          path: "/home",
        });
      }
    },
    ...config,
  });
};
