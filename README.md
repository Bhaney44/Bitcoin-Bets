# Bitcoin Bets
Bitcoin Bets is a betting application for the 2023 MIT Bitcoin Expo Hackathon. The goal for the project is to make betting with Bitcoin easy.

*Dedication.* Bitcoin Bets is dedicated to the late, great Bitcoiner Hal Finney. Read Finney's story in the Bitcoin Forum, [Bitcoin and Me (Hal Finney).](https://bitcointalk.org/index.php?topic=155054.0)

<img width="269" alt="Screenshot 2023-04-20 at 2 26 10 PM" src="https://user-images.githubusercontent.com/43055154/233467440-aa935ecb-cc62-44ba-95ce-e3fba183527a.png">

# Problem
The technical challenge in Bitcoin betting lies in ensuring the security and reliability of the platform to ensure a fair and trustworthy experience for users. Bitcoin's decentralized nature presents unique technical challenges, such as ensuring the accuracy of transactions, preventing hacking attempts, and protecting user data privacy. Furthermore, the integration of Bitcoin into the betting process requires a high degree of technical proficiency to ensure the proper handling of funds and transactions. There is a need for a robust technical infrastructure that can handle the complexities of Bitcoin betting and provide a secure, reliable, and user-friendly platform for users. Addressing these technical challenges is critical to ensuring the success and growth of the Bitcoin betting industry.

# Solution
Bolt is a new Bitcoin betting app built on the Bitcoin Lightning Network that offers a fast, secure, and reliable betting experience for users. Bolt leverages the Lightning Network's scalability and speed to provide instant transactions, ensuring that bets are executed quickly and efficiently. The app also utilizes advanced encryption and security protocols to protect user data and prevent hacking attempts. Additionally, Bolt provides users with comprehensive resources and information to make informed betting decisions, including real-time odds and analytics.

The technical infrastructure of Bolt is designed to handle the complexities of Bitcoin betting and provides a user-friendly interface that makes it easy for users to place bets and manage their funds. Bolt's Lightning Network integration enables users to make micropayments, reducing transaction fees and allowing for a more flexible and affordable betting experience. Bolt's solution provides a secure, transparent, and reliable platform for Bitcoin betting that addresses the technical challenges of the industry. By offering a fast and user-friendly experience that utilizes the latest in Bitcoin technology, Bolt is poised to become a leading player in the Bitcoin betting market.

# Lightning Links

https://github.com/ElementsProject/lightning

https://github.com/lightningnetwork

https://github.com/lnbook/lnbook

Polar: https://github.com/jamaljsr/polar

Polar Docs: https://bmancini55.github.io/building-lightning/intro.html

Polar Docs: https://docs.lightning.engineering/lapps/guides/polar-lapps

Voltage Deck: https://docs.google.com/presentation/d/1lmHXUQfJtqW2smy-T0mG0oJCoov2OMjFNWb7n1ZQ34k/edit#slide=id.g19db2905d72_1_7

Forkscanner: https://github.com/twilight-project/forkscanner

Forkscanner Setup: https://github.com/twilight-project/forkscanner/blob/scanner-walkthrough/scripts/setup.sql

Micropayments: https://github.com/thebrandonlucas/micropayments

# Expo

MIT Bitcoin Expo Website: https://www.mitbitcoinexpo.org/

MIT Bitcoin Expo Hackathon Devpost: https://mitbitcoin.devpost.com/

# Information

The demo will focus on a betting application for the NBA Playoffs.

NBA Playoffs: http://www.espn.com/nba/bracket

Choice Coin Cup: https://github.com/Bhaney44/Choice-Coin-Cup

# Examples

*Example 1. Head-to-Head.*
------
Contest: 76ers vs. Nets

Bets: Alice and Bob both bet 100 Sats on the 76ers. Cletus and Darnell both bet 100 Sats on the Nets.

Outcome: The 76ers win. Alice and Bob both receive their 100 Sats back, plus 90 Sats for a total of 190 Sats each. Cletus and Darnell both lose their 100 Sats. House takes 20 Sats.


*Example 2. Head-to-Head.*
------
Contest: 76ers vs. Nets

Bets: Alice bets 100 Sats on the 76ers and Bob bets 400 Sats on the 76ers. Cletus bets 100 Sats on the Nets and Darnell both bets 900 Sats on the Nets.

Outcome: The 76ers win. Alice wins her 100 Sats back, plus 180 Sats as her proportional share of the 900 total reward pool, for a total of 280 Sats. Bob wins his 400 Sats back, plus 720 Sats as his proportional share of the 900 total reward pool, for a total of 1,120 Sats. Cletus loses his 100 Sats and Darnell loses his 900 Sats. House takes 100 Sats.


# Designs

<img width="510" alt="Screenshot 2023-04-06 at 12 38 18 PM" src="https://user-images.githubusercontent.com/43055154/230454529-c977b89a-8aab-4623-a859-2c04daa7c0b5.png">

<img width="501" alt="Screenshot 2023-04-18 at 9 52 55 AM" src="https://user-images.githubusercontent.com/43055154/232816349-e28929fc-3676-4bdd-a23e-38c15766cd8d.png">

<img width="692" alt="Screenshot 2023-04-18 at 10 09 09 AM" src="https://user-images.githubusercontent.com/43055154/232821075-a5ffc263-0eef-45a5-a7ed-2ae9ac37773c.png">
