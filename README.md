# FE Exercise for Fetch Rewards

The code in this folder is the Take Home test from Fetch Rewards, done in January 2022.

## Intro
I applied to the position of FrontEnd Engineer at [Fetch Rewards](https://www.fetchrewards.com/), and was contacted to complete a Take Home test ASAP.


```bash
Some aspects of what our team looks for in the code exercise!

* Great presentation
* Clean Repo with well written readme
* Good application structure
* Comments


```

## Excersice

```Your task is to build a webpage with a user creation form. The form should take the following required inputs:

    Full Name
    Email
    Password
    Occupation
    State

Occupation and State should allow users to select from options returned by an endpoint. Users should only be able to select one occupation and one state. A GET request to https://frontend-take-home.fetchrewards.com/form will return a JSON
```

## How I did it
I began by creating my form with simple HTML, CSS and JS. I utalized the [Bootstrap library](https://getbootstrap.com/), in order to use less lines of code and make it responsive.

When importing and using GET on the JSON file I used the file and the external link as the API and then paresed the data in my JS file in order to allow for the drop down options for "State" and "Occupation."

The form, when completed will submit to the link provided given that is completed correctly, if  it is not completed, it will display an error message instructing the user to complete to form fully.


## License
[MIT](https://choosealicense.com/licenses/mit/)
