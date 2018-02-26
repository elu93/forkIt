User.destroy_all
Restaurant.destroy_all

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
    rating: 4.5
)

jct_kitchen = Restaurant.create!(
    name: 'JCT Kitchen & Bar',
    latitude: 33.7865573,
    longitude: -84.4146199,
    rating: 4.7
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