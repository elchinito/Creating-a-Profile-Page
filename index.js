
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Lizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
content.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
content.append(dogDetails)

let detailHeader = document.createElement('h3');
detailHeader.append('Description:');
dogDetails.append(detailHeader);

let descriptionPara = document.createElement('p');
descriptionPara.append('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.');
dogDetails.append(descriptionPara);

let feedingHeader = document.createElement('h3');
feedingHeader.append('Feeding Times:');
dogDetails.append(feedingHeader);

let feedingTimes = document.createElement('ul');
let timeOne = document.createElement('li');
timeOne.append('9:00 am');
let timeTwo = document.createElement('li');
timeTwo.append('12:00 pm');
let timeThree = document.createElement('li');
timeThree.append('5:00 pm');
feedingTimes.append(timeOne);
feedingTimes.append(timeTwo);
feedingTimes.append(timeThree);

dogDetails.append(feedingTimes);


