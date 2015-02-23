var nock  = require('nock');
var scope = nock('https://api.omise.co')
            .persist()
            .post('/charges')
            .reply(200, { "object": "charge",
                          "id": "chrg_test_4z429hvnv7ouolu6kmp",
                          "livemode": false,
                          "location": "/charges/chrg_test_4z429hvnv7ouolu6kmp",
                          "amount": 100000,
                          "currency": "thb",
                          "description": "Charge for order 3947",
                          "capture": true,
                          "authorized": true,
                          "captured": true,
                          "transaction": "trxn_test_4z429hw7a8x76nuxrc5",
                          "refunded": 0,
                          "refunds": {
                            "object": "list",
                            "from": "1970-01-01T00:00:00+00:00",
                            "to": "2015-02-19T15:19:26+00:00",
                            "offset": 0,
                            "limit": 20,
                            "total": 0,
                            "data": [
                            ],
                            "location": "/charges/chrg_test_4z429hvnv7ouolu6kmp/refunds"
                          },
                          "return_uri": "http://www.example.com/orders/3947/complete",
                          "reference": "paym_4z429hvmrk381n4q8xc",
                          "authorize_uri": "https://api.omise.co/payments/paym_4z429hvmrk381n4q8xc/authorize",
                          "failure_code": null,
                          "failure_message": null,
                          "card": {
                            "object": "card",
                            "id": "card_test_4z429c7a9vibxg2vzp0",
                            "livemode": false,
                            "country": "us",
                            "city": "Bangkok",
                            "postal_code": "10320",
                            "financing": "",
                            "last_digits": "4242",
                            "brand": "Visa",
                            "expiration_month": 2,
                            "expiration_year": 2017,
                            "fingerprint": "umrBpbHRuc8vstbcNEZPbnKkIycR/gvI6ivW9AshKCw=",
                            "name": "JOHN DOE",
                            "security_code_check": true,
                            "created": "2015-02-19T15:18:59Z"
                          },
                          "customer": null,
                          "ip": null,
                          "created": "2015-02-19T15:19:26Z"
                        }, { server: 'nginx/1.1', 'content-type': 'application/json',
             });
