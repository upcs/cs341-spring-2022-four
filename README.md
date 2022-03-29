# TrekUp

### Team-Four
Contributers: Brynn Harrington, Francisco Nguyen, Gareth Rice, Jennifer Brana, and Logan Machida. 

## 1. Introduction
The work that is most related to our project is AllTrails (https://www.alltrails.com) which is a fitness and mapping application that is used in activities such as hiking and other outdoor activities. It uses a database of trail maps and included crowdsourced reviews and images. The major issue with AllTrails is that it lacks sufficient data for all the hiking trails available and a social component. The idea that we have with TrekUp is to enhance the features that AllTrails has by providing a social media platform for users to interact with.  

We believe this is a good idea because there is a lack of applications with rewards and achievements for those who enjoy outdoor activities. Under consideration of the scope of the project, not all outdoor activities can be included in the given timeline. Therefore, we decided to focus on one of the most popular activities: hiking. We plan on implementing a program whereby users will build a profile to track the hikes they’ve given and achieve “points” to achieve rewards. The user can view hikes based on certain attributes such as location and difficulty. We hope to gain a functional website with a consistent user base upon which we can begin to sell advertisements on the website. 

The key features of the website are the ability to search for Portland hikes based on name, length, elevation change, difficulty, and rating. The website will allow users to view hikes and obtain information about them such as length and elevation change as well as view reviews of the hikes. Furthermore, we will allow users to create profiles and track the hikes they have completed and in doing so earn achievements. Furthermore, users will be able to rate hikes so that others may view their feedback.  

## 2. Overall Description
### 2.1 Product Overview
The (greater) Portland area has many hiking trails and paths and there is not a good catalogue of them out there. TrekUp is a new self-contained website for hikers in the area. It is a review and recommendation board for hiking trails as well as a way for hikers to keep track of the trails they have trekked. Though some functionality will appear similar to other products already in the market, this will be unrelated to those.  
### 2.2 Product Features
The site begins with the home page. The page will display an array of top rated and popular hiking trails, an account button, a search bar, and a filter menu on the bottom of the page. From the home page, users can go to a create-an-account page or their profile page if they are logged in, go to the top hiking trails’ pages, or search for a trail.  

The user profile page has a list of the trails that user has recorded, general statistics such as miles traversed and trails trekked, and achievements that they have earned. A user can record that they have completed a trail by going to the trail’s page which will have a button specified as “Add trail”. After the user has added the trail, a system will calculate it into their statistics and compare it to unachieved achievements, updating the achievement list if one is completed. 

From the search bar and/or by using filters, users can look for a trail archived in the product’s database. If the trail they are looking for is found, they can visit the trail’s page. The page will contain information about the hike such as how long it is, characteristic tags, the elevation change, and general difficulty. There are also users’ ratings and reviews. If the user is logged in to their account, they can leave a review and rate the hike as well. 
![flow chart](https://github.com/upcs/cs341-spring-2022-four/blob/harringt23-patch-2/SRS_images/flow_chart.png)
### 2.3 User Classes and Characteristics
One class of users is the infrequent or one-time-use user. They may be visiting Portland, hiking infrequently, or hike a lot but do not feel the need to use the product a lot. They will not feel the need to create an account and are using the product solely for the trail catalogue. Functionality for accounts will be a nonfactor to them and the product must still be useful to them without it.  

There are power users who will visit the site very frequently. They could be achievement hunting, exploring the city, or someone who hikes to be active. They will want trails that meet specifications, to meet achievement requirements or be found in a certain area. For them, the search and filter functions must always return a result that they will be satisfied with. Their statistics must be well documented, and their achievements must be organized so they know what they have, what they do not have, what they need to get them, and (if applicable) how close they are to achieving it.  
### 2.4 Design and Implementation Constraints
A list of possible issues we expect to face are the following: 
 -  Limited server space for users to track and log hikes. When a user creates a profile, we plan to allocate server space for 100 hikes.  
    A) This issue is minor.  
    B) Initially, this risk is not likely as most individuals do not exceed 100 hikes. However, as the website ages, it is likely that individuals will begin exceeding the limit with time.  
    C) We plan to address this by allocating space for more hikes as needed after a user exceeds 100 hikes. Further, as the website ages, we will have to expand the amount of server space we have to accommodate new users and aging accounts.  
- The data for some hikes is inaccurate.  
    A) This issue is moderate. We intend to provide accurate information to our users.  
    B) This is likely early in the product life. As the website matures, the data will become more accurate after we have received feedback. 
    C) We plan to address this issue by providing feedback forms so users can report inaccuracies.   
- Hacking of user accounts causes users' personal data to be compromised.   
    A) This is a severe issue. We intend to protect the integrity of the user's accounts and personal information.  
    B) This is not likely.  
    C) We will require users to provide an email address for password recovery. Further, we will have two-factor authentication such that for a user to log in to their account they will have to enter a password and answer a security question. Alternatively, we could set up a verification system that sends a code to a user's phone number for the second form of authentication later in the software development lifecycle. Furthermore, we plan to use a secure database system to protect data for users.  
- Protection of hike data from hackers who seek to alter or delete data.  
    A) This is a severe issue. We do not want our site data to be compromised as that will prevent our website from achieving its goal of providing reliable and useful hiking information.  
    B) This is not likely.  
    C) We plan to prevent this by storing multiple copies of our hike data such that data can be verified before it is presented to users in the case of alterations. Further, we plan to use a secure database to protect data.  
### 2.5 User Documentation
## 3. Use Cases
The following section demonstrates the use cases of our website. 
### 3.1 Searching for a Hike by Name 
Primary Actor: Bob, an avid hiker who heard about a cool trail from his friend and would like to know how long it will take and how difficult it is. 
Pre-condition: Website is open. Bob knows the name of a trail. 
Description: 
  1. Bob clicks the “search by trail name” bar. 
  2. He types in the trail name then hits “search”. 
  3. The trail pops up. 
Post-condition: The trail Bob is looking for appears and he can explore the trail by selecting it. 
Alternates: 
    The trail does not exist in the system. 
    Solution: The website displays that there are no trails with this name and suggests trails with similar names (matching specific words or parts of words in the name. For example, is Bob searches for “Wild wood trail”, it would suggest instead “Wildwood trail”). If there are no trails with similar names, it will prompt Bob to search again. 

### 3.2 Searching for a Hike by Filter(s) 
Primary Actor: Bob is training for an ultramarathon that is 30 miles long and has 6000 feet of elevation gain. He would like to do a training run around 25 miles with the same amount of elevation gain per mile as his race (200 feet/mile). 
Goal: Find a trail that is roughly 25 miles long with a total of 5000 feet elevation gain. 
Pre-condition: Website is open. Bob has an idea of what kind of trail he is looking for. 
Description: 
  1. Bob selects “filter trails” instead of searching for a trail. 
  2. Bob clicks on the filter for length and inputs “25 miles”. 
  3. Bob clicks on the filter for elevation gain and inputs “5000 feet”. 
  4. Bob clicks “find matches” and a list of trails appear, with the closest matches at the top. 
  5. Bob scrolls through the list of trails. 
Post-condition: A list of trails is displayed that Bob can scroll through. 
Alternates: 
    There are no trails like Bob’s specifications: The website will indicate there are no trails that match his preferences and suggest trails instead that have similar elevation gain per mile. 
    There are trails that matches Bob’s specifications, but they are out, and back trails and Bob would prefer a loop: There is another filter where the user can choose from “out and back” or “loop”. 
    Bob decides he wants to find a medium or hard trail rather than specify specific mileage/elevation gain: There is an option to filter trails based on difficulty so users can find easy, medium, or hard trails. Difficulty of trails is rated based on elevation gain/loss and distance. 

### 3.3 Clicking on a Searched Hike 
Primary/Secondary Actors: Bob, who has just moved to Oregon and is looking for a hiking trail.  
Preconditions: Bob has already searched for the name of the hike he wants, ‘Trail A’ and the trail is in the system and has appeared when he searched. 
Description:  
  1. Bob clicks on the ‘Trail A’ rectangle and the trail profile for ‘Trail A’ loads onto the screen. 
Post-Condition: Bob can now see the main image of the trail on the left of the name, the difficulty, the distance (in miles), change in elevation (feet), rating, and brief description of the hike. Underneath the image and text, he can see photos from other users have posted of the hike. 
Alternates:  
    The link is a dead link: 404 page. 
    No other users have left photos: Display a ‘Be the first user to upload photos!’ button that allows the user to upload images from the hike.  
    No rating of the hike: Display ‘Be the first user to rate this hike!’ text next two 5 image stars.  

### 3.4 Rating and Reviewing a Hike 
Primary actor: User who has completed a hike and wants to leave a review 
Pre-condition: Application is open, and the user has a profile/account. 
Description: 
  1. User clicks the sign-in button and signs into their account from the sign-in page. 
  2. Account gets signed in and the site reverts back to the home page. 
  3. User taps the search bar and types in the name of the hiking trail. 
  4. User taps on the trail that shows up right below the search bar (which is the one she is looking for). 
  5. That hiking trail’s page comes up. 
  6. User clicks the “Write a review” button or hyperlink text and a textbox pops up with five hollow trees above it. 
  7. User clicks the fourth tree, and the first four trees are filled in. 
  8. User types “It is a beautiful hike” into the textbox and clicks the “Submit” button below it.  
Post-Condition: The user’s review is put in the database with the other reviews for that hiking trail. It shows up in the review section for that hiking trail’s page. The four-tree rating is calculated into the average rating for that hike. 
Alternates: 
    User does not have an account 
    User does not know/remember the name of the hike 
    The hiking trail the user was looking for does not appear 
    User goes to the hiking trail’s page first then signs in or user clicks the “Write a review” button before signing in 
    Review hits character limit 
    
### 3.5 Creating a New Profile 
Primary Actor: Bob is an active member of the hiking community and wants to share his accomplishments and advice with others.  
Pre-Condition: Website is open. Bob knows information such as his email and hikes he has accomplished. 
Description: 
  1. Bob clicks on the “profile” button on the homepage. 
  2. Bob clicks on the “create new profile” button. 
  3. Bob clicks on the tab called “email address” and enters bob@gmail.com. 
  4. Bob clicks on tab called “name” and enters “Bob.” 
  5. Bob clicks on the “add completed trail” tab, and from the trail dropdown select “Rock Creek Trail.” 
  6. In the month dropdown, Bob selects January and, in the year dropdown, select “2022.” 
  7. Bob clicks on the create profile button. 
Post-Conditions: Bob has an account that he can sign into 
Alternates: 
    The user cannot find the trail they want to add 
    The user’s information doesn’t fit in the text box  
    The user leaves an information slot blank 
    The user does not have internet connection 
    
### 3.6 Logging into an Account 
Primary Actor: Bob is an involved member of the hiking community and wants to login to his account to post a review about his latest visit to Multnomah Falls.  
Pre-condition: Website is open. Bob knows his username and password. 
Description: 
  1. Bob clicks on the profile icon in the top right corner of the home page.  
  2. Bob clicks on the username tab and enters “mynameisbob123.” 
  3. Bob clicks on the password tab and enters “password.” 
  4. After entering both required fields, Bob click on the “login” button. 
Post Condition: Bob is brought to the homepage where all his information is displayed. He can now view his profile picture, achievements, completed hikes, and personal information. 
Alternates: 
  1. Bob forgets his username or password.  
  2. Bob enters the wrong username or password. 
  3. Bob forgets to fill in the username or password.  

### 3.7 Update Profile 
Primary Actor: Bob Rice has undergone some family changes and wants to modify his last name.  
Pre-Condition: Website is open. Bob knows his personal information.  
Description: 
  1. Bob clicks on the profile icon in the top right corner of the home page.  
  2. Bob clicks on the username tab and enters “mynameisbob123.” 
  3. Bob clicks on the password tab and enters “password.” 
  4. After entering both required fields, Bob clicks on the “login” button. 
  5. At the top of the page, Bob clicks on the “edit profile” button.  
  6. In the tab labeled “change last name,” Bob enters the name “Thebuilder.”  
  7. Bob clicks submit to save the changes. 
Post Condition: Bob is brought back to the homepage and can view his profile with the updated last name displayed with his information. 
Alternates: 
    Bob’s last name does not fit within the specified field. 
    Bob forgets his username or password and cannot login. 
  
### 3.8 User Adding a New Hike to their List of Completed Hikes 
Primary Actor: user who has completed a hike they have not done 
Pre-condition: User has an account and is logged in. The hike is in the database and the user is on the home page 
Description:  
  1. User types the name of the hike into the search bar. 
  2. The hike shows up and the user clicks on it 
  3. User gets sent to the hike’s page 
  4. User clicks on the “Add hike” button 
  5. A pop-up appears that says that the hike has been added 
  6. User clicks the “ok” button to close the pop-up 
Post-condition: the hike is added to the user’s list of completed hikes. The user can see it in their profile page. 
Alternates: 
    User can’t find the trail by searching 
    User did not add the right trail 

### 3.9 User Removing a Hike from their List of Completed Hikes 
Primary Actor: Bob who has an account and a non-empty list of completed hikes 
Precondition: Bob has (mistakenly) added a hike that he didn’t complete  
Description:  
  1. Bob scrolls through her completed hikes to the hike he didn’t complete  
  2. He clicks on the hike to open up the hike information  
  3. Bob scrolls down to the bottom of the hike page  
  4. Bob selects the option to remove hike 
  5. A popup window comes up to verify Bob really wants to remove the hike from list of completed hikes 
  6. Bob confirms 
  7. The hike is removed from Bob’s list of completed hikes 
Post-conditions: the hike is removed from Bob’s list of completed hikes 
Alternates: 
    Bob mistakenly clicked on the remove hike button 
    Bob clicks on the wrong hike to remove 
   
## 4. External Interface Requirements
### 4.1 User Interfaces
The user interface consists of an interactive homepage containing popular hike information and a search section. It also contains a user specific homepage for personal hike statistics and achievements. 
#### 4.1A Home Page
he homepage displays eight popular hikes that a user can quickly select (by clicking on) for more hike information. The center of the compass graphic contains a link to the user profile page. If a user is not logged in, this will lead to a page where users can sign up for the site. The logo in the top left returns to this home page from anywhere on the website. Clicking anywhere in the bottom dark orange bar will open the search and filtering website page.  

#### 4.1B Search Page
From the search page, hikes can be searched for by clicking on the search bar and typing in a name. They can also be filtered by clicking on checkboxes in the filter drop down menu. They can be filtered by length, distance away, and elevation change. Clicking on any hike opens up a page for that hike where you can add it to your completed hikes, or look at more information about that hike such as more photos, ratings, and user reviews. It also allows users to add photos or their own reviews.	  

#### 4.1C User Page
The user profile displays statistics about a user's hiking such as total miles walked, total elevation change, and number of hikes completed. It also contains cards for the hikes completed so users can go back and see what they’ve finished. To increase engagement, the user profile also contains various achievements that can be unlocked such as finishing a certain number of hikes and walking certain distances across several hikes.  

### 4.2 Software Interfaces
The database we are using for the webpage is from [Oregon Hikers](https://www.oregonhikers.org/field_guide/Portland_and_Willamette_Valley_Hikes). This data lists different trails in different parts of Oregon in a general view. The rows are grouped by the areas that the trails are in. Inside each group, the first column of the first row is the name of area, the following rows list information about the corresponding trail. The first column is empty, the second is the name of the trail, the difficulty of the trail, the distance in miles of the trail, the change of elevation in feet, and a brief description of the hike. The following represents an example group of data in a tabular form in Excel and on gcloud, respectively:  
![db snip](https://github.com/upcs/cs341-spring-2022-four/blob/harringt23-patch-2/SRS_images/db_snip.png)
![sql_snip](https://github.com/upcs/cs341-spring-2022-four/blob/harringt23-patch-2/SRS_images/sql_snip.png)
Additionally, we plan on storing the user information in a secure database with rows being each user. The first column will be the username, hidden passwords, and the achievements they have achieved. The second column followed the following Entity Relationship Diagram represents how our data interacts with each other: 
![ERD](https://github.com/upcs/cs341-spring-2022-four/blob/harringt23-patch-2/SRS_images/erd.png)
## 5. Nonfunctional Requirements 
Below we list all non-functional requirements for your project in a convenient format. Non-functional requirements specify broad properties of the product that are not associated with a particular use case.
### 5.1 Security
User accounts are secure! Protect users' accounts to prevent others from accessing their personal data and altering it.  

### 5.2 Security of User Logins
To protect user accounts from being easily hacker, we plan to implement two factor verification in which users must log in with a password and answer a security question.  

### 5.3 Data accuracy
The hike data will be within 95% accuracy. For example, if a hike is labeled as 30.10 miles but in reality is 30.00 miles, this is acceptable error.  

### 5.4 Attractive Searching
When a user types in the search bar, they should not be redirected to a separate page. Rather, results should appear directly below the search on the main page. Results should appear in less than 250 milliseconds. Furthermore, filtering should produce results in the same time frame. Results should automatically be displayed when the user selects method of filter. I.E. when a user clicks on “distance” the hikes are automatically arranged in order of ascending distance.  

### 5.5 Loading Speed 
When a user enters a name in the search bar, the results should appear on the screen within 1 second. Furthermore, there should be at least three results that most closely match the hike entered by the user.  

### 5.6 Data Capacity
The user should have the space to be able to record and store up to 100 hikes on the user profile page.

# 6. Other Requirements
