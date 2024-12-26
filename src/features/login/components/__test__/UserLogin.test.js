// src/features/login/components/__test__/UserLogin.test.js
import { render, fireEvent } from "@testing-library/vue";
import UserLogin from "../UserLogin.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { createPinia, setActivePinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { vi, describe, beforeEach, it, expect } from "vitest";
import { defineComponent } from "vue";
import "@testing-library/jest-dom";

describe("UserLogin.vue", () => {
  let loginMutate;
  const mocks = vi.hoisted(() => ({
    useLogin: vi.fn(),
  }));

  const router = createRouter({
    history: createWebHashHistory(),
    routes: [{ path: "/login", component: defineComponent({ template: `<div></div>` }) }],
  });

  const factory = (props) =>
    render(UserLogin, {
      props,
      global: { plugins: [VueQueryPlugin, router] },
    });

  beforeEach(() => {
    setActivePinia(createPinia());
    loginMutate = vi.fn().mockResolvedValue({ code: "SUCCESS" });
    mocks.useLogin.mockReturnValue({ mutate: loginMutate });
  });

  it("初始化渲染", () => {
    const { getByText } = factory();
    expect(getByText("欢迎登录管理系统")).toBeInTheDocument();
  });

  it("用户名和密码没有填写全，就无法登陆", async () => {
    const { getByRole } = factory();
    const button = getByRole("button", { name: /登录/i });

    await fireEvent.submit(getByRole("form"));

    expect(button).toBeDisabled();
    expect(loginMutate).not.toHaveBeenCalled();
  });
});
