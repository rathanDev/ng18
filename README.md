
Ref:
Lazy loading 
    https://www.youtube.com/watch?v=GRelnf8Gtnw
Angular with JWT token 
    https://www.youtube.com/watch?v=Nh6l9uzU6dg

ng new ng18 --directory . --no-standalone --routing 

ng g m customers --route customers --module app.module
ng g m orders --route orders --module app.module

Lazy loading modules 
    using loadChildren 

Programmatically loading components 
    using ViewContainerRef 

Programmatically loading components 
    using ngComponentOutlet

PreloadingStrategy to load components in the bg

ng g c layz-compon 

ng g c lazy-standalone



# Angular JWT Authentication

@auth/angular-jwt 

Dependency injection using setter
    private http = inject(HttpClient)

BehaviourSubject to trigger events 

HttpInterceptorFn to set jwt token in API headers 

AuthGuard to for protected pages 
Router to navigate to other pages 

https://dummyjson.com/
https://fakeapi.platzi.com/

Standalone components 
    it can be bootstrapped directly 
    no need to be declared in NgModule 


Login component using ReactiveForms
    https://angular.dev/guide/forms/reactive-forms

Http call 
    provideHttpClient() at imports


Format document 
    Shift + Alt + f
Optimize imports 
    Shift + Alt + o

Custom Snippet - clg to console.log()
    If you don’t have this snippet, you can create a custom snippet in your settings.json by adding a snippet like this:

    Open Command Palette (Ctrl+Shift+P or Cmd+Shift+P on macOS).
    Search for Preferences: Configure User Snippets.
    Select a language or create a global snippet file.
    Add this to your snippet file:
    json
    Copy code
    "Log Statement": {
    "prefix": "clg",
    "body": [
        "console.log($1);"
    ],
    "description": "Console log"
    }
    Now typing clg and pressing Tab will insert the console.log() template.


ng build --base-href https://rathanDev.github.io/ng18/
npx angular-cli-ghpages --dir=dist/ng18

https://rathanDev.github.io/ng18/




