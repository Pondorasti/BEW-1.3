# Authentification

{% api-method method="get" host="localhost:8000" path="/auth/register" %}
{% api-method-summary %}
Register new user
{% endapi-method-summary %}

{% api-method-description %}
Creates a new user from the given username and password.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="Username" type="string" required=true %}

{% endapi-method-parameter %}

{% api-method-parameter name="Password" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{    
    message: "Succesfully signed up.",    
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQxYTVlNTU3NjliYTM1YWJkNmUzODgiLCJ1c2VybmFtZSI6IkdpdGJvb2siLCJwYXNzd29yZCI6IiQyYiQxMCRMcGlhaGxUMEdzR2dicjRKczNqTllPMVFENGF6Ync2ajJXTW93UnZYbUxYV2JueW1nVldGNiIsImlhdCI6MTYxNDkxNTA0NSwiZXhwIjoxNjIwMDk5MDQ1fQ.-ttVL53AlaIJ5cOpqghBrDLc7xzdvmkMux_2N24e_pw
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="localhost:8000" path="/auth/login" %}
{% api-method-summary %}
Login user
{% endapi-method-summary %}

{% api-method-description %}
Logins an existing user.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="Username" type="string" required=true %}

{% endapi-method-parameter %}

{% api-method-parameter name="Password" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns a unique token used for authentification.
{% endapi-method-response-example-description %}

```
{
    "message": "Succesfully signed in.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQwNmQ5NWM2NDliYmY2NjdmMDMzM2UiLCJ1c2VybmFtZSI6IkFsZXg0IiwicGFzc3dvcmQiOiIkMmIkMTAkeWliWDZaeVc1S2lydzdvN2VHb1p2ZW9WRFlSc09HbnlEeFAwbkJZaTlrM1ZieHRDS0tRb2kiLCJpYXQiOjE2MTQ5MTUyNTEsImV4cCI6MTYyMDA5OTI1MX0.jgExB4lZXOKdW8c_i7cBELUdMLJkvGTrHamm1LUy368"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "message": "Wrong username" || "Wrong password"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

