# Plumsail
Тестовое задание для компании Plumsail  
A programming task for candidates for developer JavaScript, C#.
1. Create an arbitrary form with CSS and JavaScript framework of your choice. Say, a contact or order form with at least five fields of different types: text, drop-down, date, radio, check box.
2. You can use frameworks like vue.js, angular, react, knockout. Don't use jQuery as main JavaScript framework. It can be used as a helper only. You can use TypeScript or Babel if you want.
3. Add validation to the form fields.
4. Send a JSON-object with filled-in data to a REST-service on the submission:
{
  fieldId1: 'value1',
  fieldId2: 'value2',
  ...
}
5. Implement the REST-service using C# and ASP.NET Web Api/ASP.NET Core Web API that retrieves, saves, and returns data (JSON-objects) of forms.
6. Create a page for listing and searching the submitted objects.
7. Pack all JS- and CSS-files of the project into a single file and minify it with the help of build system of your choice (webpack, gulp, grunt).
The key idea here that the form can be completely changed whereas the services will stay the same.
The case in the task is quite basic, but consider it real-life application. Thus, try to create good architecture and level of abstraction. We will evaluate quality of your code, usability of the UI and architecture.
If you're not able to implement one or more of the requirements, describe the reason and send us what you have done.
