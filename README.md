# Bday-App ![Deploy main branch](https://github.com/CSemper/bday-app/workflows/Deploy%20main%20branch/badge.svg)

<img align = "left" img src="https://user-images.githubusercontent.com/70574102/98873747-d39ab280-2470-11eb-96e9-a71893ac04aa.png" width="350">

### Description:
Never forget a birthday again! I thought it would be fun to build my own asynchronous application to send me a helpful text reminder of someone's birthday. <br/> 

The main function is stored in an AWS Lambda and is triggered once a day to check for any birthdays. If yes, the Twilio API is used to send a custom message: <br/> 

> Today is {name}'s {age} birthday! Remember they wanted {special request}.
> Call/Text them on {contact details}"

<br/> 

### Technologies: 
**Language**: Python || **Testing**: Pytest || **Libraries**: boto3, dotenv <br/> 
**API**: Twilio Cloud Communications || **Cloud Provider**: AWS <br/> 
**Deployment**: Serverless CloudFormation
