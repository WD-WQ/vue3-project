<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="loginform"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h2>HELLO</h2>
          <el-form-item class="form-item" prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item class="form-item" prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item class="form-item">
            <el-button
              :loading="live"
              type="primary"
              class="submitbtn"
              @click="login"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import useUserStore from "../../store/modules/user";
import { ElNotification } from "element-plus";
import { getTime } from "@/utils/time";

let useStore = useUserStore();
const loginForm = reactive({
  username: "",
  password: "",
});
const live = ref(false);
const $router = useRouter();
const loginForms = ref();

const login = async () => {
  //保证所有的表单项校验通过再发请求
  await loginForms.value.validate();
  live.value = true;
  //发送登录请求
  //请求成功跳转到首页
  //请求失败，提示失败信息
  try {
    //也可以用.then语法
    await useStore.userLogin(loginForm);
    //跳转到首页
    live.value = false;
    $router.push("/");
    ElNotification({
      type: "success",
      title: `Hi,${getTime()}好`,
      message: "欢迎回来",
    });
  } catch (error) {
    live.value = false;
    ElNotification({
      type: "error",
      message: error.message,
    });
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validatorUserName = (rule: any, value: any, callback: any) => {
  //rule校验规则对象
  //callback:如果符合条件callback放行通过，否则callback内注入错误提示信息
  if (value.length >= 5) {
    callback();
  } else {
    callback(new Error("账号长度至少为5位,至多为6位"));
  }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validatorPassWord = (rule: any, value: any, callback: any) => {
  if (/^\d{6,15}$/.test(value)) {
    callback();
  } else {
    callback(new Error("密码长度至少为6位,至多为6位"));
  }
};
const rules = {
  username: [
    // {required:true,min:6,max:10,message:'长度至少6位,至多10位',trigger:'change'}
    { trigger: "change", validator: validatorUserName }, //自定义校验规则
  ],
  password: [
    // {required:true,min:6,max:15,message:'长度至少6位,至多15位',trigger:'change'}
    { trigger: "change", validator: validatorPassWord }, //自定义校验规则
  ],
};
</script>

<style scoped>
body {
  margin: 0 !important;
}
.login_container {
  width: 100%;
  height: 100vh;
  background: url("../../assets/images/background.jpg") no-repeat;
  background-size: cover;
}
.loginform {
  width: 500px;
  margin-top: 300px;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  background: url("../../assets/images/login_form.png") no-repeat;
}
.form-item {
  width: 400px;
  padding-left: 20px;
}
.submitbtn {
  width: 400px;
}
</style>
