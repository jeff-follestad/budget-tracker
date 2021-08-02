![Budget Tracker](https://user-images.githubusercontent.com/78771614/127792396-fd3b8416-e042-46a1-9347-0eb2f603d864.png)
## OVERVIEW

[Budget Tracker](https://www.awesomescreenshot.com/image/11390668?key=947845fbbf5c16465b25a7b49da8f165) app now provides users with a fast, easy, and reliable way to track their money anywhere or anytime on their mobile device.

Budget Tracker's most recent release dramatically improves the user's experience by allowing them to add expenses and deposits to their budget with or without mobile or wi-fi connectivity. 

If the user enters a transaction while offline, the total will be updated when they're back online. 

The new Budget Tracker application in hosted on Heroku.

## DESIGN CRITERIA

GIVEN a budget tracker without an internet connection: 
* WHEN the user inputs an expense or deposit,
THEN they will receive a notification that they have added an expense or deposit.

* WHEN the user reestablishes an internet connection,
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated.

## TECHNICAL ACCEPTANCE CRITERIA

Satisfies all of the preceding acceptance criteria plus the following:

* Budget Tracker includes a service worker.

* Budget Tracker includes a web manifest.

* Budget Tracker uses IndexedDB for offline functionality.

* Budget tracker is deployed to [Heroku](https://on-or-offline-budget-tool.herokuapp.com/)

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) file for details.


