import images from '../assets/images';
import strings from '../i18n/strings';
import {StackNav} from '../navigation/NavigationKeys';

const OnBoardingSlide = [
  {
    text: 'We provide high quality products just for you',
    image: images.onBordingImg1,
  },
  {
    text: 'Your satisfaction is our number one priority',
    image: images.onBordingImg2,
  },
  {
    text: "Let's fulfill your daily needs with Ecomark right now!",
    image: images.onBordingImg3,
  },
];

const GenderData = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
  {label: 'Other', value: 'other'},
];

const ProfileSetting = [
  {
    id: 1,
    title: strings.editProfile,
    icon: 'person-outline',
    route: StackNav.SetUpProfile,
    header: strings.editProfile,
  },
  {
    id: 2,
    title: strings.address,
    icon: 'location-outline',
    route: StackNav.Address,
  },
  {
    id: 2,
    title: strings.notification,
    icon: 'notifications-outline',
    route: StackNav.NotificationSetting,
  },
  {
    id: 3,
    title: strings.payment,
    icon: 'wallet-outline',
    route: StackNav.Payment,
  },
  {
    id: 4,
    title: strings.security,
    icon: 'shield-checkmark-outline',
    route: StackNav.Security,
  },
  {
    id: 5,
    title: strings.language,
    icon: 'options-outline',
    value: 'English(US)',
    route: StackNav.Language,
  },
  {
    id: 6,
    title: strings.darkMode,
    icon: 'contrast-outline',
    rightIcon: 'rightIcon',
  },
  {
    id: 7,
    title: strings.privacyPolicy,
    icon: 'lock-closed-outline',
    route: StackNav.PrivacyPolicy,
  },
  {
    id: 8,
    title: strings.helpCenter,
    icon: 'information-circle-outline',
    route: StackNav.HelpCenter,
  },
  {
    id: 8,
    title: strings.inviteFriends,
    icon: 'people-outline',
    route: StackNav.InviteFriends,
  },
];

const contactUsData = [
  {
    id: 1,
    title: 'Customer Service',
    icon: 'headset',
  },
  {
    id: 2,
    title: 'WhatsApp',
    icon: 'whatsapp',
  },
  {
    id: 3,
    title: 'Website',
    icon: 'google-earth',
  },
  {
    id: 4,
    title: 'Facebook',
    icon: 'facebook',
  },
  {
    id: 5,
    title: 'Instagram',
    icon: 'instagram',
  },
  {
    id: 6,
    title: 'Twitter',
    icon: 'twitter',
  },
];

const helperCategoryData = [
  'General',
  'Account',
  'Payment',
  'Subscription',
  'Others',
];

const helperData = [
  {
    title: 'What is Ecomark?',
    description:
      'Anistream is a streaming service that offers a wide variety of anime titles.',
  },
  {
    title: 'How to use Ecomark?',
    description:
      'You can sign up for Anistream by downloading the app from the App Store or Google Play Store.',
  },
  {
    title: 'How do I cancel a orders product?',
    description:
      'You can remove anime on your wishlist by clicking the heart icon on the anime details page.',
  },
  {
    title: 'Is Ecomark free to use?',
    description:
      'You can subscribe to premium by clicking the premium button on the home page.',
  },
  {
    title: 'How to add promo on Ecomark?',
    description:
      'You can download anime by clicking the download icon on the anime details page.',
  },
  {
    title: 'How to unsubscribe from premium?',
    description:
      'You can unsubscribe from premium by clicking the premium button on the home page.',
  },
];

const languageData = [
  {
    title: 'Suggested',
    data: [{lnName: 'English(US)'}, {lnName: 'English(UK)'}],
  },
  {
    title: 'Language',
    data: [
      {
        lnName: 'English',
      },
      {
        lnName: 'Spanish',
      },
      {
        lnName: 'French',
      },
      {
        lnName: 'German',
      },
      {
        lnName: 'Italian',
      },
      {
        lnName: 'Portuguese',
      },
      {
        lnName: 'Russian',
      },
      {
        lnName: 'Turkish',
      },
      {
        lnName: 'Chinese',
      },
      {
        lnName: 'Japanese',
      },
      {
        lnName: 'Korean',
      },
      {
        lnName: 'Arabic',
      },
      {
        lnName: 'Hindi',
      },
      {
        lnName: 'Indonesian',
      },
      {
        lnName: 'Malay',
      },
      {
        lnName: 'Thai',
      },
    ],
  },
];

const privacyPolicyData = [
  {
    title: strings.privacyPolicy1,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy2,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy3,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy2,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy3,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy2,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy3,
    description: strings.privacyPolicyDesc,
  },
];

const userDetail = [
  {
    name: 'Dracel Steward',
    description: 'arianacooper | 24.5M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
  },
  {
    name: 'John Doe',
    description: 'johndoe | 10M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Jane Smith',
    description: 'janesmith | 5M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHVzZXIlMjBwcm9maWxlJTIwd2l0aCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Bob Johnson',
    description: 'bobjohnson | 2M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Sara Wilson',
    description: 'sarawilson | 1M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Tom Wilson',
    description: 'tomwilson | 500K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Alice Brown',
    description: 'alicebrown | 250K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Emily Davis',
    description: 'emilydavis | 100K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Mark Lee',
    description: 'marklee | 50K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Laura Lee',
    description: 'lauralee | 10K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
];

const chatData = [
  {
    id: 1,
    message: 'Hi Theresa, good morning 😄',
    time: '12:00',
    type: 'sender',
  },
  {
    id: 2,
    message: 'Hi there, good morning! How are you?',
    time: '12:01',
    type: 'receiver',
  },
  {
    id: 3,
    message: 'I am doing well, thanks for asking 😊',
    time: '12:02',
    type: 'sender',
  },
  {
    id: 4,
    message: "That's great to hear! What are your plans for the day?",
    time: '12:03',
    type: 'receiver',
  },
  {
    id: 5,
    message:
      'I have a few meetings scheduled, but otherwise just working from home. How about you?',
    time: '12:04',
    type: 'sender',
  },
  {
    id: 1,
    message: 'Hi Theresa, good morning 😄',
    time: '12:00',
    type: 'sender',
  },
  {
    id: 2,
    message: 'Hi there, good morning! How are you?',
    time: '12:01',
    type: 'receiver',
  },
  {
    id: 3,
    message: 'I am doing well, thanks for asking 😊',
    time: '12:02',
    type: 'sender',
  },
  {
    id: 4,
    message: "That's great to hear! What are your plans for the day?",
    time: '12:03',
    type: 'receiver',
  },
  {
    id: 5,
    message:
      'I have a few meetings scheduled, but otherwise just working from home. How about you?',
    time: '12:04',
    type: 'sender',
  },
  {
    id: 1,
    message: 'Hi Theresa, good morning 😄',
    time: '12:00',
    type: 'sender',
  },
  {
    id: 2,
    message: 'Hi there, good morning! How are you?',
    time: '12:01',
    type: 'receiver',
  },
  {
    id: 3,
    message: 'I am doing well, thanks for asking 😊',
    time: '12:02',
    type: 'sender',
  },
  {
    id: 4,
    message: "That's great to hear! What are your plans for the day?",
    time: '12:03',
    type: 'receiver',
  },
  {
    id: 5,
    message:
      'I have a few meetings scheduled, but otherwise just working from home. How about you?',
    time: '12:04',
    type: 'sender',
  },
];

const AddressData = [
  {
    id: 1,
    title: 'Home',
    address: '123, Main Street, New York, USA',
    isDefault: true,
  },
  {
    id: 2,
    title: 'Office',
    address: '345, Second Street, New York, USA',
    isDefault: false,
  },
  {
    id: 3,
    title: 'Appartment',
    address: '567, Third Street, New York, USA',
    isDefault: false,
  },
  {
    id: 4,
    title: "Parent's House",
    address: '789, Fourth Street, New York, USA',
    isDefault: false,
  },
  {
    id: 5,
    title: 'Farm House',
    address: '101, Fifth Street, New York, USA',
    isDefault: false,
  },
  {
    id: 6,
    title: 'Town Square',
    address: '123, Main Street, New York, USA',
    isDefault: false,
  },
];

const walletData = [
  {
    id: 1,
    product: 'Suga Leather Shoes',
    price: '$100',
    date: 'Dec 15, 2024 | 12:00 PM',
    status: strings.orders,
    productImage: images.shoes1,
  },
  {
    id: 2,
    product: strings.topUpWallet,
    price: '$150',
    date: 'Jan 05, 2023 | 12:50 PM',
    status: strings.topUp,
  },
  {
    id: 3,
    product: 'Werolla Cardigans',
    price: '$385',
    date: 'Dec 14, 2024 | 11:34 PM',
    status: strings.orders,
    productImage: images.clothe3,
  },
  {
    id: 4,
    product: 'Mini Leather Bag',
    price: '$653',
    date: 'Dec 13, 2024 | 03:23 AM',
    status: strings.orders,
    productImage: images.bag1,
  },
  {
    id: 5,
    product: strings.topUpWallet,
    price: '$600',
    date: 'Dec 12, 2024 | 02:50 AM',
    status: strings.topUp,
  },
  {
    id: 6,
    product: 'Puma Leather Shoes',
    price: '$356',
    date: 'Dec 03, 2024 | 02:34 PM',
    status: strings.orders,
    productImage: images.shoes2,
  },
  {
    id: 7,
    product: 'Sony Microphone',
    price: '$354',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.mic1,
  },
  {
    id: 8,
    product: 'Gucci Leather Bag',
    price: '$100',
    date: 'Jul 15, 2023 | 12:00 PM',
    status: strings.orders,
    productImage: images.bag2,
  },
  {
    id: 9,
    product: strings.topUpWallet,
    price: '$560',
    date: 'Jan 05, 2023 | 12:50 PM',
    status: strings.topUp,
  },
];

const onGoingData = [
  {
    id: 1,
    product: 'Suga Leather Shoes',
    price: '$100',
    date: 'Dec 15, 2024 | 12:00 PM',
    status: strings.orders,
    productImage: images.shoes1,
    color: '#7A5548',
    size: '38',
  },
  {
    id: 2,
    product: 'Werolla Cardigans',
    price: '$385',
    date: 'Dec 14, 2024 | 11:34 PM',
    status: strings.orders,
    productImage: images.clothe3,
    color: '#949494',
    size: 'M',
  },
  {
    id: 3,
    product: 'Mini Leather Bag',
    price: '$653',
    date: 'Dec 13, 2024 | 03:23 AM',
    status: strings.orders,
    productImage: images.bag1,
    color: '#101010',
    size: 'S',
  },
  {
    id: 4,
    product: 'Puma Leather Shoes',
    price: '$356',
    date: 'Dec 03, 2024 | 02:34 PM',
    status: strings.orders,
    productImage: images.shoes2,
    color: '#101010',
    size: '40',
  },
  {
    id: 5,
    product: 'Sony Microphone',
    price: '$354',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.mic1,
    color: '#7A5548',
  },
  {
    id: 6,
    product: 'Gucci Leather Bag',
    price: '$100',
    date: 'Jul 15, 2023 | 12:00 PM',
    status: strings.orders,
    productImage: images.bag2,
    color: '#101010',
    size: 'M',
  },
];

const completedOrderData = [
  {
    id: 1,
    product: 'Sonia Headphone',
    price: '$325.00',
    date: 'Dec 15, 2024 | 12:00 PM',
    status: strings.orders,
    productImage: images.headphone1,
    color: '#000',
  },
  {
    id: 2,
    product: 'Mini Leather Bag',
    price: '$540.00',
    date: 'Dec 14, 2024 | 11:34 PM',
    status: strings.orders,
    productImage: images.bag1,
    color: '#949494',
  },
  {
    id: 3,
    product: 'Puma Sneaker Shoe',
    price: '$390.00',
    date: 'Dec 13, 2024 | 03:23 AM',
    status: strings.orders,
    productImage: images.shoes3,
    color: '#101010',
    size: '32',
  },
  {
    id: 4,
    product: 'Fujifilm Camera',
    price: '$870.00',
    date: 'Dec 03, 2024 | 02:34 PM',
    status: strings.orders,
    productImage: images.camera1,
    color: '#101010',
  },
  {
    id: 5,
    product: 'Zonio Super Watch',
    price: '$850.00',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.watch1,
    color: '#E7E7E7',
  },
  {
    id: 6,
    product: 'Gucci Leather Bag',
    price: '$100',
    date: 'Jul 15, 2023 | 12:00 PM',
    status: strings.orders,
    productImage: images.bag2,
    color: '#101010',
    size: 'M',
  },
];

const orderStatus = [
  {
    id: 1,
    title: 'Order In Transit - Dec 17',
    time: '12:00 PM',
    status: '32 Manchester Ave. Ringgold, GA 30736',
  },
  {
    id: 2,
    title: 'Order ... Customs Port - Dec 16',
    time: '14:40 PM',
    status: '4 Evergreen Street Lake Zurich, IL 60047',
  },
  {
    id: 3,
    title: 'Orders are ... Shipped - Dec 15',
    time: '11:30 AM',
    status: '9177 Hillcrest Street Wheeling, WV 26003',
  },
  {
    id: 4,
    title: 'Order is in Packing - Dec 15',
    time: '10:25 PM',
    status: '891 Glen Ridge St. Gainesville, VA 20155',
  },
  {
    id: 5,
    title: 'Verified Payments - Dec 15',
    time: '10:04 PM',
    status: '55 Summerhouse Dr. Apopka, FL 32703',
  },
];

const orderStatusCategory = [
  {
    id: 1,
    image: images.seller,
    position: 1,
    isHide: false,
  },
  {
    id: 2,
    image: images.shipping,
    position: 2,
    isHide: true,
  },
  {
    id: 3,
    image: images.courier,
    position: 3,
    isHide: true,
  },
  {
    id: 4,
    image: images.delivered,
    position: 4,
    isHide: true,
  },
];

const homeCategoryData = [
  {
    id: 1,
    image: images.bestsellers,
    title: strings.category1,
    data: [
      {
        id: 1,
        product: 'Robodog',
        descText: 'The bestselling duo behind Spaceboy and Grannysaurus return with another side-splittingly silly tale, this time revolving around a mechanised mutt who is the last hope of cleaning up the lawless town of Bedlam.',
        price: 24.36,
        author: 'David Walliams',
        date: 'Dec 15, 2024 | 12:00 PM',
        status: strings.orders,
        productImage: images.bestsellers1,
        rating: '4.8',
        sold: '9,742',
      },
      {
        id: 2,
        product: "How Westminster Works... and Why It Doesn't",
        descText:'Deconstructing the processes and culture of the badly broken British political system in clear and accessible prose, the author of How to Be a Liberal reveals how we have got to this low point and how to start dragging Westminster out of the mire.',
        price: 30.86,
        author: 'Ian Dunt',
        date: 'Dec 14, 2024 | 11:34 PM',
        status: strings.orders,
        productImage: images.bestsellers2,
        rating: '4.5',
        sold: '6.4k',
      },
      {
        id: 3,
        product: 'Bored of Lunch: The Healthy Air Fryer Book',
        descText:'Helping you to make all your fried favourites using just a fraction of the oil, this delicious collection of healthy and speedy recipes from the popular air-frying Instagrammer will take your mealtime game to another level.',
        price: 30.86,
        author: 'Nathan Anthony',
        date: 'Dec 13, 2024 | 03:23 AM',
        status: strings.orders,
        productImage: images.bestsellers3,
        rating: '3.2',
        sold: '4.6k',
      },
      {
        id: 4,
        product: 'Atalanta: Signed Edition',
        descText:'The bestselling author of Ariadne and Elektra brings the formidable Atalanta and her adventures amidst the Argonauts to vivid life in another sweeping re-imagining of Greek myth.',
        price: 27.61,
        author: 'Jennifer Saint',
        date: 'Dec 03, 2024 | 02:34 PM',
        status: strings.orders,
        productImage: images.bestsellers4,
        rating: '4.1',
        sold: '11.3k',
      },
      {
        id: 5,
        product: 'Billy and the Giant Adventure: Exclusive Edition',
        descText: "From the beloved chef and author of ONE and Jamie's 30-Minute Meals comes an enthralling adventure featuring a group of children desperate to explore the mysterious Waterfall Woods.",
        price: 24.36,
        author: 'Jamie Oliver',
        date: 'Aug 07, 2023 | 05:40 PM ',
        status: strings.orders,
        productImage: images.bestsellers5,
        rating: '4.5',
        sold: '3642',
      },
      {
        id: 6,
        product: 'Shy: Signed Edition',
        descText: 'With boundless empathy and psychological precision, the award-winning author of Grief Is the Thing with Feathers and Lanny delivers a breathtaking vignette of a troubled young boy caught between the ghosts of his past and the enormous questions about his future.',
        price: 21.11,
        author: 'Max Porter',
        date: 'Jul 15, 2023 | 12:00 PM',
        status: strings.orders,
        productImage: images.bestsellers6,
        rating: '4.5',
        sold: '5642',
      },
    ],
  },
  {
    id: 2,
    image: images.paperbacks,
    title: strings.category2,
    data: [
      {
        id: 1,
        product: 'Do No Harm',
        descText: 'Perfect reading for all fans of The Chain and Falling, Do No Harm is a compulsive, edge-of-the-seat thriller about a surgeon forced to murder a patient in order to save her son from a ruthless kidnapper.',
        price: 16.24,
        author: 'Jack Jordan',
        date: 'Dec 15, 2024 | 12:00 PM',
        status: strings.number,
        productImage: images.paperbacks1,
        rating: '4.7',
        sold: '7,483',
      },
      {
        id: 2,
        product: 'The Romantic',
        descText: 'The author of Any Human Heart guides readers expertly through the richly imagined life of a fictional nineteenth century figure, tracing his passage from adventurer and bankrupt to African explorer and minor diplomat in perfectly crafted, immersive prose.',
        price: 16.24,
        author: 'William Boyd',
        date: 'Dec 14, 2024 | 11:34 PM',
        status: strings.number,
        productImage: images.paperbacks2,
        rating: '4.5',
        sold: '6.4k',
      },
      {
        id: 3,
        product: 'No Plan B - Jack Reacher',
        descText: 'The third scintillating Jack Reacher thriller co-written by Lee Child and his younger brother Andrew finds our charismatic hero probing the expansive conspiracy behind an apparent suicide.',
        price: 16.24,
        author: 'Lee Child, Andrew Child',
        date: 'Dec 13, 2024 | 03:23 AM',
        status: strings.number,
        productImage: images.paperbacks3,
        rating: '3.2',
        sold: '4.6k',
      },
      {
        id: 4,
        product: 'Bad Actors',
        descText: 'The eighth Slough House thriller finds Jackson Lamb embroiled in double dealing and the hunt for a missing agent as the rest of the slow horses add their own distinctively chaotic magic to the mix.',
        price: 14.61,
        author: 'Mick Herron',
        date: 'Dec 03, 2024 | 02:34 PM',
        status: strings.number,
        productImage: images.paperbacks4,
        rating: '4.1',
        sold: '11.3k',
      },
      {
        id: 5,
        product: 'French Braid',
        descText: 'The Pulitzer Prize-winning, Booker Prize-shortlisted author of Redhead by the Side of the Road returns with a luminous new novel that paints a joyous and painfully truthful portrait of family life.',
        price: 16.24,
        author: 'Anne Tyler ',
        date: 'Aug 07, 2023 | 05:40 PM ',
        status: strings.number,
        productImage: images.paperbacks5,
        rating: '4.5',
        sold: '3642',
      },
      {
        id: 6,
        product: 'Bleeding Heart Yard',
        descText: 'From the author of the Ruth Galloway series comes a gripping crime thriller featuring D.I. Harbinder Kaur, as a school reunion turns deadly for a police officer involved in a murder three decades previously.',
        price: 16.24,
        author: 'Elly Griffiths',
        date: 'Jul 15, 2023 | 12:00 PM',
        status: strings.number,
        productImage: images.paperbacks6,
        rating: '4.5',
        sold: '5642',
      },
    ],
  },
  {
    id: 3,
    image: images.fictionBooks,
    title: strings.category3,
    data: [
      {
        id: 1,
        product: 'Mini Leather BagIt Ends With Us',
        descText: "Heartbreaking and exquisitely written, Hoover’s touching novel of desire, lost loves and second chances focuses on a brilliantly realised love triangle and how we must always live with the ghosts of the past.",
        price: 27.61,
        author: 'Colleen Hoover',
        date: 'Dec 15, 2024 | 12:00 PM',
        status: strings.number,
        productImage: images.fictionBooks1,
        rating: '4.5',
        sold: '9,546',
      },
      {
        id: 2,
        product: 'In a Thousand Different Ways',
        descText: "Written with Ahern's characteristic insight and compassion, In a Thousand Different Ways recounts the story of Alice - a woman struggling under the weight of a multitude of conflicting emotions.",
        price: 32.50,
        author: 'Cecelia Ahern ',
        date: 'Dec 14, 2024 | 11:34 PM',
        status: strings.number,
        productImage: images.fictionBooks2,
        rating: '4.8',
        sold: '6.4k',
      },
      {
        id: 3,
        product: 'Simply Lies',
        descText: 'The crime thriller maestro spins the enthralling cat-and-mouse story of a former Jersey City cop and single mother hunting down a female sociopath who never leaves any trace of her true identity.',
        price: 32.50,
        author: 'David Baldacci',
        date: 'Dec 13, 2024 | 03:23 AM',
        status: strings.number,
        productImage: images.fictionBooks3,
        rating: '3.2',
        sold: '4.6k',
      },
      {
        id: 4,
        product: 'Romantic Comedy: Signed Edition',
        descText: 'The bestselling author of Rodham and American Wife returns with an enthralling, humorous and subversive tale set in the world of a live TV comedy show, as a script writer who has given up on romance finds her world upended by an unexpected encounter.',
        price: 27.61,
        author: 'Curtis Sittenfeld',
        date: 'Dec 03, 2024 | 02:34 PM',
        status: strings.number,
        productImage: images.fictionBooks4,
        rating: '3.4',
        sold: '11.3k',
      },
      {
        id: 5,
        product: 'Close to Home',
        descText: 'At once knife-sharp, tender and powerfully moving, Magee’s debut is a striking tale of poverty, love and trauma told through the lens of two working-class brothers in post-conflict Belfast.',
        price: 24.35,
        author: 'Michael Magee ',
        date: 'Aug 07, 2023 | 05:40 PM ',
        status: strings.number,
        productImage: images.fictionBooks5,
        rating: '4.2',
        sold: '3642',
      },
      {
        id: 6,
        product: 'The Lock-Up',
        descText: "As Strafford and Quirke investigate the supposed suicide of a woman found in a lock-up, suspicions turn to foul play in this unputdownable instalment of Banville's celebrated literary crime series.",
        price: 27.61,
        author: 'John Banville',
        date: 'Jul 15, 2023 | 12:00 PM',
        status: strings.number,
        productImage: images.fictionBooks6,
        rating: '4.4',
        sold: '5642',
      },
    ],
  },

  {
    id: 4,
    image: images.nonFictionBooks,
    title: strings.category4,
    data: [
      {
        id: 1,
        product: 'The God Desire',
        descText: "Matching the intelligence and nuance of his bestselling Jews Don't Count, the comedian and author explores his keen desire to believe in a deity and why this very desperation to believe proves his atheism correct.",
        price: 16.24,
        author: 'David Baddiel',
        date: 'Dec 15, 2024 | 12:00 PM',
        status: strings.number,
        productImage: images.nonFictionBooks1,
        rating: '4.9',
        sold: '7,884',
      },
      {
        id: 2,
        product: 'Spare',
        descText: 'In the most eagerly-awaited memoir of 2023, Prince Harry tells his version of the story about the tragic death of his mother Princess Diana, life within the Royal Family and his marriage to Meghan, Duchess of Sussex, with remarkable candour and directness.',
        price: 45.50,
        author: 'Prince Harry',
        date: 'Dec 14, 2024 | 11:34 PM',
        status: strings.number,
        productImage: images.nonFictionBooks2,
        rating: '4.3',
        sold: '4.4k',
      },
      {
        id: 3,
        product: 'The Survivor',
        descText: 'Deeply harrowing and inspiring in equal measure, this profound Holocaust memoir tells the story of Josef Lewkowicz – a survivor of six of the most notorious concentration camps who after the war helped to bring some of the worst Nazi criminals to justice.',
        price: 32.50,
        author: 'Josef Lewkowicz, Michael Calvin ',
        date: 'Dec 13, 2024 | 03:23 AM',
        status: strings.number,
        productImage: images.nonFictionBooks3,
        rating: '5.0',
        sold: '10.3k',
      },
      {
        id: 4,
        product: 'Killing Thatcher',
        descText: 'Drawing from extensive research and told with journalistic verve, this compelling book from the Guardian’s Ireland correspondent unravels the events before and after the IRA’s attempt to assassinate Margaret Thatcher and members of her government in Brighton in 1984.',
        price: 40.63,
        author: 'Rory Carroll',
        date: 'Dec 03, 2024 | 02:34 PM',
        status: strings.number,
        productImage: images.nonFictionBooks4,
        rating: '4.9',
        sold: '4.6k',
      },
      {
        id: 5,
        product: 'The Earth Transformed',
        descText: 'Wide-ranging, topical and revelatory, this monumental account from the author of The Silk Roads of how the natural world has shaped human history sheds fascinating new light on both today’s climate crisis and the epochal shifts of the past.',
        price: 48.75,
        author: 'Peter Frankopan ',
        date: 'Aug 07, 2023 | 05:40 PM ',
        status: strings.number,
        productImage: images.nonFictionBooks5,
        rating: '3.2',
        sold: '4.8k',
      },
      {
        id: 6,
        product: 'Our King: Charles III',
        descText: 'Renowned royal correspondent Robert Jobson details the life of the enigmatic king, posing searching questions about how the experiences of his life have prepared him to rule as sovereign.',
        price: 35.75,
        author: 'Robert Jobson ',
        date: 'Jul 15, 2023 | 12:00 PM',
        status: strings.number,
        productImage: images.nonFictionBooks6,
        rating: '4.6',
        sold: '4.9k',
      },
    ],
  },

  {
    id: 5,
    image: images.childrenYoungAdultBooks,
    title: strings.category5,
    data: [
      {
        id: 1,
        product: 'Dog Man 11: Twenty Thousand Fleas Under the Sea',
        descText: 'In another riotously funny and original Dog Man adventure, our canine crusader confronts the dastardly Piggy and his latest plot to sabotage the Supa Buddies and the city.',
        price: 21.11,
        author: 'Dav Pilkey',
        date: 'Dec 15, 2024 | 12:00 PM',
        status: strings.number,
        productImage: images.childrenYoungAdultBooks1,
        rating: '4.9',
        sold: '7,543',
      },
      {
        id: 2,
        product: 'The Cats We Meet Along the Way',
        descText: 'With the world due to end imminently, Aisha and her brilliantly drawn family undertake an eventful road trip across Malaysia to find her estranged sister June in this blazingly original and wonderfully affecting debut.',
        price: 12.99,
        author: 'Nadia Mikail ',
        date: 'Dec 14, 2024 | 11:34 PM',
        status: strings.number,
        productImage: images.childrenYoungAdultBooks2,
        rating: '4.3',
        sold: '2.4k',
      },
      {
        id: 3,
        product: 'A Good Girl’s Guide to Murder',
        descText: 'A compelling murder mystery that follows in the footsteps of the genre-busting One of Us is Lying, Jackson’s impressively accomplished debut features a likeable teenage sleuth out to crack a cold case as part of her homework assignment. Twists, shocks and red herrings are liberally strewn about the plot, but the thrills and spills are never allowed to overshadow the novel’s tender central relationship. ',
        price: 14.61,
        author: 'Holly Jackson',
        date: 'Dec 13, 2024 | 03:23 AM',
        status: strings.number,
        productImage: images.childrenYoungAdultBooks3,
        rating: '5.0',
        sold: '7.3k',
      },
      {
        id: 4,
        product: 'Shatter Me - Shatter Me',
        descText: 'Stranger Things meets Shadow and Bone in this first instalment of an epic and romantic YA fantasy series - perfect for fans of Leigh Bardugo, Sarah J. Maas and Victoria Aveyard. Now a TikTok phenomenon.',
        price: 14.61,
        author: 'Tahereh Mafi',
        date: 'Dec 03, 2024 | 02:34 PM',
        status: strings.number,
        productImage: images.childrenYoungAdultBooks4,
        rating: '4.9',
        sold: '2365',
      },
      {
        id: 5,
        product: 'Murder Most Unladylike',
        descText: 'The first instalment of the hugely popular Wells and Wong detective stories for children, Stevens’s note-perfect pastiche of Golden Age crime mysteries is a brilliantly realised and compelling boarding school adventure. ',
        price: 12.99,
        author: 'Robin Stevens',
        date: 'Aug 07, 2023 | 05:40 PM ',
        status: strings.number,
        productImage: images.childrenYoungAdultBooks5,
        rating: '4.2',
        sold: '4.8k',
      },
      {
        id: 6,
        product: 'Harry Potter and the Philosopher’s Stone',
        descText: 'Twenty-five years ago, a wide-eyed young wizard was first drawn into an old-fashioned battle between good and evil. From Muggles to Quidditch, Hogwarts to Diagon Alley, the magical journey that launched a billion young readers feels just as fresh, fun and meticulously rendered today.',
        price: 12.99,
        author: 'J. K. Rowling',
        date: 'Jul 15, 2023 | 12:00 PM',
        status: strings.number,
        productImage: images.childrenYoungAdultBooks6,
        rating: '4.6',
        sold: '4.9k',
      },
    ],
  },
  {
    id: 6,
    image: images.signedSpecialEditions,
    title: strings.category6,
    data: [
      {
        id: 1,
        product: 'A House for Alice: Signed Edition',
        descText: 'Set in the harrowing aftermath of the Grenfell tragedy, this powerful and moving novel from the author of Ordinary People follows the titular protagonist and her three daughters, as they search for a place Alice would be happy to call her last home.',
        price: 30.86,
        author: 'Diana Evans',
        date: 'Dec 15, 2024 | 12:00 PM',
        status: strings.number,
        productImage: images.signedSpecialEditions1,
        rating: '4.8',
        sold: '6,328',
      },
      {
        id: 2,
        product: 'Greek Lessons: Signed Edition',
        descText: 'The acclaimed author of The Vegetarian delivers a spellbinding exploration of grief, intimacy and the power of language, as a student who has lost her voice and her teacher who is losing his sight begin a journey out of silence and darkness together.',
        price: 27.61,
        author: 'Han Kang',
        date: 'Dec 14, 2024 | 11:34 PM',
        status: strings.number,
        productImage: images.signedSpecialEditions2,
        rating: '4.6',
        sold: '5.573',
      },
      {
        id: 3,
        product: 'Go as a River',
        descText: "With echoes of Where the Crawdads Sing, Read's hypnotic debut traces the path of a lifetime in lyrical prose as young Torie Nash absorbs the transformative words of a mysterious stranger.",
        price: 27.61,
        author: 'Shelley Read',
        date: 'Dec 13, 2024 | 03:23 AM',
        status: strings.number,
        productImage: images.signedSpecialEditions3,
        rating: '4.0',
        sold: '8.2k',
      },
      {
        id: 4,
        product: 'The House of Whispers',
        descText: "Both deliciously sinister gothic melodrama and nuanced comment on extremism and prejudice, this 1930s-set chiller from the author of The Clockwork Girl focuses on strange goings on in a Rome residence under Mussolini's Fascist rule.",
        price: 24.36,
        author: 'Anna Mazzola ',
        date: 'Dec 03, 2024 | 02:34 PM',
        status: strings.number,
        productImage: images.signedSpecialEditions4,
        rating: '4.5',
        sold: '4.6k',
      },
      {
        id: 5,
        product: 'Silver in the Bone',
        descText: 'Arthurian legend meets The Lord of the Rings as a pair of rival crypt-robbers face deadly danger trying to retrieve an enchanted ring in this compelling dark fantasy from the author of Lore.',
        price: 27.61,
        author: 'Alexandra Bracken',
        date: 'Aug 07, 2023 | 05:40 PM ',
        status: strings.number,
        productImage: images.signedSpecialEditions5,
        rating: '3.2',
        sold: '4.8k',
      },
      {
        id: 6,
        product: 'On the Savage Side',
        descText: 'A moving, haunting tale of sisterly love and creeping evil from the author of the acclaimed Betty, this evocative page-turner based on true events finds two women questioning the games of their past as female corpses begin to appear in their rural Ohio town.',
        price: 27.61,
        author: 'Tiffany McDaniel',
        date: 'Jul 15, 2023 | 12:00 PM',
        status: strings.number,
        productImage: images.signedSpecialEditions6,
        rating: '4.6',
        sold: '4.9k',
      },
    ],
  },
];

const mostPopularData = [
  strings.all,
  strings.category1,
  strings.category2,
  strings.category3,
  strings.category4,
  strings.category5,
  strings.category6,
  strings.category7,
];

const homeProductData = [
  {
    id: 1,
    product: 'Sonia Headphone',
    price: '$325.00',
    date: 'Dec 15, 2024 | 12:00 PM',
    status: strings.orders,
    productImage: images.headphone1,
    color: '#000',
    rating: '4.3',
    sold: '23.5k',
  },
  {
    id: 2,
    product: 'Mini Leather Bag',
    price: '$540.00',
    date: 'Dec 14, 2024 | 11:34 PM',
    status: strings.orders,
    productImage: images.bag1,
    color: '#949494',
    rating: '4.5',
    sold: '6.4k',
  },
  {
    id: 3,
    product: 'Puma Casual Shoes',
    price: '$390.00',
    date: 'Dec 13, 2024 | 03:23 AM',
    status: strings.orders,
    productImage: images.shoes3,
    color: '#101010',
    size: ['6', '7', '8', '9', '10', '11', '12'],
    rating: '3.2',
    sold: '4.6k',
  },
  {
    id: 4,
    product: 'Fujifilm Camera',
    price: '$870.00',
    date: 'Dec 03, 2024 | 02:34 PM',
    status: strings.orders,
    productImage: images.camera1,
    color: '#101010',
    rating: '4.1',
    sold: '11.3k',
  },
  {
    id: 5,
    product: 'Zonio Super Watch',
    price: '$850.00',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.watch1,
    color: '#E7E7E7',
    rating: '4.5',
    sold: '3642',
  },
  {
    id: 6,
    product: 'Gucci Leather Bag',
    price: '$100',
    date: 'Jul 15, 2023 | 12:00 PM',
    status: strings.orders,
    productImage: images.bag2,
    color: '#101010',
    size: 'M',
    rating: '4.5',
    sold: '5642',
  },
];

const notificationData = [
  {
    title: 'Today',
    data: [
      {
        id: 1,
        image: images.discountIcon,
        title: '30% Special Discount!',
        description: 'Special promotion only valid today',
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        id: 1,
        image: images.walletIcon,
        title: 'Top Up E-Wallet Successful!',
        description: 'You have to top up your e-wallet',
      },
      {
        id: 1,
        image: images.locationIcon,
        title: 'New Services Available!',
        description: 'Now you can track orders in real time',
      },
    ],
  },
  {
    title: 'December 22, 2024',
    data: [
      {
        id: 1,
        image: images.creditCardIcon,
        title: 'Credit Card Connected!',
        description: 'Credit Card has been linked!',
      },
      {
        id: 1,
        image: images.profileIcon,
        title: 'Account Setup Successful!',
        description: 'Your account has been created!',
      },
    ],
  },
];

const colorData = [
  '#7A5548',
  '#797979',
  '#9F9F9F',
  '#673AB3',
  '#FF981F',
  '#607D8A',
  '#3F51B2',
];

const ratingData = [strings.all, '5', '4', '3', '2', '1'];

const reviewsData = [
  {
    id: 1,
    name: 'John Duew',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',

    rating: 5,
    review:
      'The item is very good, my son likes it very much and plays every day 💯💯💯',
    like: 352,
    time: '6 days ago',
  },
  {
    id: 2,
    name: 'Jane Doe',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',

    rating: 4,
    review:
      'The item is good, but it could be better. My son likes it, but he has some complaints about it.',
    like: 100,
    time: '2 days ago',
  },
  {
    id: 3,
    name: 'Bob Smith',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',

    rating: 3,
    review:
      'The item is okay, but it could be better. My son likes it, but he has some complaints about it.',
    like: 50,
    time: '1 day ago',
  },
  {
    id: 4,
    name: 'Alice Johnson',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',

    rating: 2,
    review:
      'The item is not very good. My son does not like it very much and does not play with it often.',
    like: 10,
    time: '1 hour ago',
  },
  {
    id: 5,
    name: 'Tom Hanks',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',

    rating: 1,
    review:
      'The item is terrible. My son hates it and does not play with it at all.',
    like: 1,
    time: '1 minute ago',
  },
  {
    id: 6,
    name: 'Megan Fox',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',

    rating: 5,
    review:
      'The item is very good, my son likes it very much and plays every day 💯💯💯',
    like: 352,
    time: '6 days ago',
  },
  {
    id: 7,
    name: 'Samantha Smith',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',

    rating: 4,
    review:
      'The item is good, but it could be better. My daughter likes it, but she has some complaints about it.',
    like: 200,
    time: '3 days ago',
  },
  {
    id: 8,
    name: 'David Johnson',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',

    rating: 3,
    review:
      'The item is okay, but it could be better. My daughter likes it, but she has some complaints about it.',
    like: 100,
    time: '2 days ago',
  },
  {
    id: 9,
    name: 'Emily Brown',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',

    rating: 2,
    review:
      'The item is not very good. My daughter does not like it very much and does not play with it often.',
    like: 20,
    time: '1 day ago',
  },
  {
    id: 10,
    name: 'Olivia Davis',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',

    rating: 1,
    review:
      'The item is terrible. My daughter hates it and does not play with it at all.',
    like: 2,
    time: '1 hour ago',
  },
  {
    id: 11,
    name: 'Sophia Wilson',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',

    rating: 5,
    review:
      'The item is very good, my daughter likes it very much and plays every day 💯💯💯',
    like: 352,
    time: '6 days ago',
  },
];

const sortAndFilterData = [
  strings.mostPopular,
  strings.mostRecent,
  strings.oldest,
  strings.priceLowToHigh,
  strings.priceHighToLow,
];

const shippingData = [
  {
    id: 1,
    title: 'Economy',
    description: 'Delivery in 3-5 days',
    price: '$10',
    image: images.shipping1,
  },
  {
    id: 2,
    title: 'Regular',
    description: 'Delivery in 2-3 days',
    price: '$15',
    image: images.seller,
  },
  {
    id: 3,
    title: 'Cargo',
    description: 'Delivery in 1-2 days',
    price: '$20',
    image: images.shipping,
  },
  {
    id: 3,
    title: 'Express',
    description: 'Delivery in 1 days',
    price: '$25',
    image: images.shipping2,
  },
];

const addPromoData = [
  {
    id: 1,
    title: 'Special 25% Off',
    description: 'Special promo only today!',
  },
  {
    id: 2,
    title: 'Discount 30% Off',
    description: 'New user special promo',
  },
  {
    id: 3,
    title: 'Special 20% Off',
    description: 'Special promo only today!',
  },
  {
    id: 4,
    title: 'Discount 15% Off',
    description: 'Special promo only valid today!',
  },
  {
    id: 5,
    title: 'Discount 35% Off',
    description: 'Special promo only valid today!',
  },
];

export {
  ProfileSetting,
  GenderData,
  OnBoardingSlide,
  contactUsData,
  helperCategoryData,
  helperData,
  languageData,
  privacyPolicyData,
  userDetail,
  chatData,
  AddressData,
  walletData,
  onGoingData,
  orderStatus,
  orderStatusCategory,
  completedOrderData,
  homeCategoryData,
  mostPopularData,
  homeProductData,
  notificationData,
  colorData,
  ratingData,
  reviewsData,
  sortAndFilterData,
  shippingData,
  addPromoData,
};
