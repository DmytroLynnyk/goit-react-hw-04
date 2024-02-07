import axios from 'axios';

const API_KEY = 'ZRjaoBiorU5Ti5slFrRb5FFbTfF1378SFylgNETheGw';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';
// axios.defaults.headers.common['Autorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 10,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(
    `?client_id=${API_KEY}&query=${query}&page=${page}`
  );

  // const normalizeData = data.url.map(({ small, regular }) => ({
  //   small: small,
  //   regular: regular,
  // }));

  return { data };
};

[
  {
    id: 'V8w0gSmxajY',
    slug: 'a-person-swimming-in-the-ocean-with-a-mask-on-V8w0gSmxajY',
    created_at: '2023-04-28T13:21:00Z',
    updated_at: '2024-02-04T19:49:16Z',
    promoted_at: '2023-08-01T19:16:01Z',
    width: 8256,
    height: 5504,
    color: '#0c598c',
    blur_hash: 'L$E:=4x^M{R,?w%LM|R,-nn$R*j[',
    description:
      'Home to kaleidoscopic-colored coral reefs and an abundance of diverse marine life | Islands of NEOM- NEOM, Saudi Arabia',
    alt_description: 'a person swimming in the ocean with a mask on',
    breadcrumbs: [],
    urls: {
      raw: 'https://images.unsplash.com/photo-1682687982185-531d09ec56fc?ixid=M3w1NjM1MDJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNzE0ODcyNXw\u0026ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1682687982185-531d09ec56fc?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w1NjM1MDJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNzE0ODcyNXw\u0026ixlib=rb-4.0.3\u0026q=85',
      regular:
        'https://images.unsplash.com/photo-1682687982185-531d09ec56fc?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w1NjM1MDJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNzE0ODcyNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080',
      small:
        'https://images.unsplash.com/photo-1682687982185-531d09ec56fc?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w1NjM1MDJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNzE0ODcyNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400',
      thumb:
        'https://images.unsplash.com/photo-1682687982185-531d09ec56fc?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w1NjM1MDJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNzE0ODcyNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682687982185-531d09ec56fc',
    },
    links: {
      self: 'https://api.unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-mask-on-V8w0gSmxajY',
      html: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-mask-on-V8w0gSmxajY',
      download:
        'https://unsplash.com/photos/V8w0gSmxajY/download?ixid=M3w1NjM1MDJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNzE0ODcyNXw',
      download_location:
        'https://api.unsplash.com/photos/V8w0gSmxajY/download?ixid=M3w1NjM1MDJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNzE0ODcyNXw',
    },
    likes: 178,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: {
      impression_urls: [
        'https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false\u0026bannerID=11515629\u0026rnd=[timestamp]\u0026redir=https://secure.insightexpressai.com/adserver/1pixel.gif',
        'https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false\u0026bannerID=11515832\u0026rnd=[timestamp]\u0026redir=https://secure.insightexpressai.com/adserver/1pixel.gif',
      ],
      tagline: 'Made to Change',
      tagline_url:
        'https://www.neom.com/en-us?utm_source=unsplash\u0026utm_medium=referral',
      sponsor: {
        id: 'mYizSrdJkkU',
        updated_at: '2024-02-05T12:02:17Z',
        username: 'neom',
        name: 'NEOM',
        first_name: 'NEOM',
        last_name: null,
        twitter_username: 'neom',
        portfolio_url: 'http://www.neom.com',
        bio: 'Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.',
        location: 'NEOM, Saudi Arabia',
        links: {
          self: 'https://api.unsplash.com/users/neom',
          html: 'https://unsplash.com/@neom',
          photos: 'https://api.unsplash.com/users/neom/photos',
          likes: 'https://api.unsplash.com/users/neom/likes',
          portfolio: 'https://api.unsplash.com/users/neom/portfolio',
          following: 'https://api.unsplash.com/users/neom/following',
          followers: 'https://api.unsplash.com/users/neom/followers',
        },
        profile_image: {
          small:
            'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32',
          medium:
            'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64',
          large:
            'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128',
        },
        instagram_username: 'discoverneom',
        total_collections: 7,
        total_likes: 1,
        total_photos: 202,
        total_promoted_photos: 72,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: 'discoverneom',
          portfolio_url: 'http://www.neom.com',
          twitter_username: 'neom',
          paypal_email: null,
        },
      },
    },
    topic_submissions: {
      blue: { status: 'approved', approved_on: '2023-08-03T19:04:28Z' },
    },
    user: {
      id: 'mYizSrdJkkU',
      updated_at: '2024-02-05T12:02:17Z',
      username: 'neom',
      name: 'NEOM',
      first_name: 'NEOM',
      last_name: null,
      twitter_username: 'neom',
      portfolio_url: 'http://www.neom.com',
      bio: 'Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.',
      location: 'NEOM, Saudi Arabia',
      links: {
        self: 'https://api.unsplash.com/users/neom',
        html: 'https://unsplash.com/@neom',
        photos: 'https://api.unsplash.com/users/neom/photos',
        likes: 'https://api.unsplash.com/users/neom/likes',
        portfolio: 'https://api.unsplash.com/users/neom/portfolio',
        following: 'https://api.unsplash.com/users/neom/following',
        followers: 'https://api.unsplash.com/users/neom/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32',
        medium:
          'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64',
        large:
          'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128',
      },
      instagram_username: 'discoverneom',
      total_collections: 7,
      total_likes: 1,
      total_photos: 202,
      total_promoted_photos: 72,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: 'discoverneom',
        portfolio_url: 'http://www.neom.com',
        twitter_username: 'neom',
        paypal_email: null,
      },
    },
  },
];
