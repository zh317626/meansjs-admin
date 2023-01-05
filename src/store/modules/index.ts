// https://webpack.js.org/guides/dependency-management/#requirecontext
const moduleFiles = require.context('.', true, /(?<!index)\.ts$/);

const modules = moduleFiles.keys().reduce((modules: any, modulePath: any) => {
  // 设置模块名 './user.js' => 'user'
  const moduleName: any = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  // 模块返回的对象
  const value = moduleFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

export default modules;
