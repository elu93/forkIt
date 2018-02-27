User.destroy_all
Restaurant.destroy_all
Food.destroy_all

bob_loblaw = User.create!(
    email: 'bob_loblaw@lawblog.com',
    password: 'blahblah',
    password_confirmation: 'blahblah'
)

george_michael = User.create!(
    email: 'george.michael@bluth.com',
    password: 'blahblah',
    password_confirmation: 'blahblah'
)

royal_china = Restaurant.create!(
    name: 'Royal China',
    latitude: 33.892176,
    longitude: -84.2946053,
    rating: 4.5,
    image: "https://source.unsplash.com/naOfJ3DlfPM"
)

jct_kitchen = Restaurant.create!(
    name: 'JCT Kitchen & Bar',
    latitude: 33.7865573,
    longitude: -84.4146199,
    rating: 4.7,
    image: "http://www.jctkitchen.com/wp-content/themes/jct/includes/images/jct_main_logo.png"
)

#royal_china's menu
Food.create!(
    name: 'Fried Rice',
    price: 10.00,
    description: 'Your choice of meat with jasmine rice stir-fried to perfection with organic eggs and peanut oil. A taste of China in your mouth.',
    restaurant: royal_china
)

Food.create!(
    name: 'Ma-Po Tofu',
    price: 9.50,
    description: 'Deathly spicy. Not for the faint hearted. Explosion of Sichuan right in your mouth.',
    restaurant: royal_china
)

Food.create!(
    name: 'Lobster with Scallions',
    price: 20.00,
    description: 'Fresh lobster from the heart of the ocean. Experience the authentic cuisine of South China.',
    restaurant: royal_china
)

Food.create!(
    name: 'Shrimp & Grits',
    price: 21.00,
    description: "tim & alice's red mule grits, shrimp bordelaise, pan fried croutons",
    restaurant: jct_kitchen
)

Food.create!(
    name: 'JCT Fried Chicken',
    price: 22.00,
    description: "collard greens, buttermilk biscuits, JCT hot sauce",
    restaurant: jct_kitchen
)

Food.create!(
    name: 'Wood Grilled Burger',
    price: 17.00,
    description: "red onion backon jam, whipped blue cheese fries",
    restaurant: jct_kitchen
)

#bob_ablaw's seed data
Post.create!(
    user: bob_loblaw,
    restaurant: royal_china,
    title: FFaker::Book.title,
    content: FFaker::Book.description
)
Post.create!(
    user: bob_loblaw,
    restaurant: jct_kitchen,
    title: FFaker::Book.title,
    content: FFaker::Book.description
)
Post.create!(
    user: bob_loblaw,
    restaurant: royal_china,
    title: FFaker::Book.title,
    content: FFaker::Book.description
)
Post.create!(
    user: bob_loblaw,
    restaurant: jct_kitchen,
    title: FFaker::Book.title,
    content: FFaker::Book.description
)

#george_michael's seed data
Post.create!(
    user: george_michael,
    restaurant: royal_china,
    title: FFaker::Book.title,
    content: FFaker::Book.description
)
Post.create!(
    user: george_michael,
    restaurant: jct_kitchen,
    title: FFaker::Book.title,
    content: FFaker::Book.description
)
Post.create!(
    user: george_michael,
    restaurant: royal_china,
    title: FFaker::Book.title,
    content: FFaker::Book.description
)
Post.create!(
    user: george_michael,
    restaurant: jct_kitchen,
    title: FFaker::Book.title,
    content: FFaker::Book.description
)