# Vendor

{% api-method method="get" host="localhost:8000" path="/vendor" %}
{% api-method-summary %}
Get all vendors
{% endapi-method-summary %}

{% api-method-description %}
Returns all the Vendors from the database.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "vendors": [
        {
            "iceCreams": [],
            "_id": "603dd8b5ec5cd46f11d1e049",
            "name": "haagen-dazs",
            "__v": 0
        }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="localhost:8000" path="/vendor/:vendorId" %}
{% api-method-summary %}
Get vendor by id
{% endapi-method-summary %}

{% api-method-description %}
Returns the Vendor with the specified id.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="vendorId" type="string" required=true %}
The id associated with the vendor.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "vendor": {
        "iceCreams": [],
        "_id": "6040907f09c90709f8fc0c02",
        "name": "testest",
        "__v": 0
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="localhost:8000" path="/vendor" %}
{% api-method-summary %}
Add new vendor
{% endapi-method-summary %}

{% api-method-description %}
Adds a new Vendor to the database
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Bearer Token" type="string" required=false %}
Use the JWT Token returned from authentication.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="name" type="string" required=true %}
Name of the vendor.
{% endapi-method-parameter %}

{% api-method-parameter name="foundedYear" type="string" required=true %}
The year the vendor was founded.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "vendor": {
        "iceCreams": [],
        "_id": "6041a9235769ba35abd6e389",
        "name": "Ben&Jerry",
        "__v": 0
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="put" host="localhost:8000" path="/vendor/:vendorId" %}
{% api-method-summary %}
Update vendor by id
{% endapi-method-summary %}

{% api-method-description %}
Updates the Vendor with the specified id.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="vendorId" type="string" required=true %}
The id associated with the vendor.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Bearer Token" type="string" required=true %}
Use the JWT Token returned from authentication.
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "vendor": {
        "iceCreams": [],
        "_id": "6041a9235769ba35abd6e389",
        "name": "Ben&Jerrys",
        "__v": 0
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="localhost:8000" path="/vendor/:vendorId" %}
{% api-method-summary %}
Delete vendor by id
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="vendorId" type="string" required=false %}
The id associated with the vendor.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Bearer Token" type="string" required=false %}
Use the JWT Token returned from authentitication.
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "message": "Succesfully deleted.",
    "vendor": {
        "iceCreams": [],
        "_id": "6041a9235769ba35abd6e389",
        "name": "Ben&Jerrys",
        "__v": 0
    }
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Invalid vendor id.
{% endapi-method-response-example-description %}

```
{
    "error": "Vendor does not exist."
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

