/**
 * Project name(项目名称)：Creation_and_use_of_JS_objects
 * File name(文件名): test3
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/4
 * Time(创建时间)： 18:22
 * Version(版本): 1.0
 * Description(描述)： 无
 */

var person = {
    name: "Peter",
    age: 28,
    gender: "Male",
    displayName: function ()
    {
        document.write(this.name);
    }
}
document.write("姓名：" + person.name + "<br>");
document.write("年龄：" + person["age"]);