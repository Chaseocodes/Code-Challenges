// 5 kyu codewar challenge


// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// my answer:
function domainName(url){
    return url.replace('http://','').replace('www.','').replace('https://','').split('.')[0]
    }