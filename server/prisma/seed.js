const Prisma = require('@prisma/client')
const { PrismaClient } = Prisma
const { images, subtitles, titles } = require('../helpers.js')
console.log(images, titles, subtitles)

const prisma = new PrismaClient()

const userData = (Prisma.UserCreateInput = [
  {
    username: 'demo',
    password: 'demo',
    pfp: 'demo1',
  },
  {
    username: 'Alice',
    password: 'demo',
    pfp: 'demo1',
  },
])

const usTrackData = (Prisma.TrackCreateInput = [
  {
    trackName: 'Ginseng Strip 2002',
    artist: 'Yung Lean',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/e9/c4/bd/e9c4bd59-080d-329b-c763-7a7baabb9377/7071245098315_1.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Drink Before The War',
    artist: "Sinéad O'Connor",
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/d0/76/4e/d0764e1f-32c3-7e4d-b950-917a2bee10a7/5054526780682_1.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Ameno Amapiano Remix (You Wanna Bamba)',
    artist: 'Goya Menor & Nektunez',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/80/d6/d9/80d6d97e-6c37-15de-d80f-c61cdfa618c6/886449838677.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Heat Waves',
    artist: 'Glass Animals',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/da/8b/77/da8b7731-6f4f-eacf-5e74-8b23389eefa1/20UMGIM03371.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'abcdefu',
    artist: 'GAYLE',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/a8/28/f3/a828f3eb-74a6-96c9-356f-940da7905f54/075679774309.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Enemy (From the series Arcane League of Legends)',
    artist: 'Imagine Dragons, Arcane & League of Legends',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/5d/d8/fc/5dd8fc36-85ad-e7c9-8288-e7d12d332934/21UM1IM39402.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Do It to It',
    artist: 'Acraze Feat. Cherish',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/3b/da/58/3bda58c3-4cb9-b30d-b455-035010707df9/21UMGIM70915.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Cold Heart (PNAU Remix)',
    artist: 'Elton John & Dua Lipa',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/db/29/07/db290719-0123-4b57-8593-426925c454ba/21UMGIM74865.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Mujeriego',
    artist: 'Ryan Castro',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/29/73/62/297362c0-f0ff-1462-ef63-24ede5d642f9/886449817276.jpg/400x400cc.jpg',
  },
  {
    trackName: 'THATS WHAT I WANT',
    artist: 'Lil Nas X',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/9f/cf/dc/9fcfdc19-7a61-3836-defb-35d817529b25/886449511440.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Pepas',
    artist: 'Farruko',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/02/59/6b/02596b89-0475-9b14-3b51-934d24770ec3/886449572236.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Infinity',
    artist: 'Jaymes Young',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/65/49/ec/6549ec2c-8e7f-7fc8-701f-199d6f0697dc/075679758781.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Where Are You Now',
    artist: 'Lost Frequencies & Calum Scott',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/25/79/2a/25792aaa-fe16-c718-27fa-c3b1781780fb/886449449668.jpg/400x400cc.jpg',
  },
  {
    trackName: 'TO THE MOON',
    artist: 'Jnr Choi',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/ba/9f/0d/ba9f0dce-8690-fa89-afbb-f9979bb823bd/886449854943.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Baddest Boy',
    artist: 'Skiibii',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/25/c7/94/25c794c6-ccb2-fbdc-1952-187ba5f28793/0766214754213.png/400x400cc.jpg',
  },
  {
    trackName: 'Oh My God',
    artist: 'Adele',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Middle of the Night',
    artist: 'Elley Duhé',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/64/03/cb/6403cb43-d892-4663-d759-5093b5ed610c/886448203087.jpg/400x400cc.jpg',
  },
  {
    trackName: "I'm Alone",
    artist: 'Melisa & Tommo',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/be/ec/3d/beec3d56-f4d8-a473-b843-64314ea888c8/cover.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Shivers',
    artist: 'Ed Sheeran',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/c5/d8/c6/c5d8c675-63e3-6632-33db-2401eabe574d/190296491412.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Captain',
    artist: 'Nutcase22',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/4d/5b/dc/4d5bdcaf-1b20-aa03-2c21-68f5bc2b88c3/190296351907.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Frozen',
    artist: 'Madonna & Sickick',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/51/a9/7a/51a97aca-e299-49d6-0d8e-7b5db0543294/054391908261.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Moth to a Flame',
    artist: 'Swedish House Mafia & The Weeknd',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/2f/56/e7/2f56e79c-fdaa-c0d5-545e-9942e54301c3/21UM1IM29516.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Emiliana',
    artist: 'CKay',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/0c/86/8d/0c868d5a-81f4-42dd-1ce2-f6569fee0585/190296332722.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Overpass Graffiti',
    artist: 'Ed Sheeran',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/c5/d8/c6/c5d8c675-63e3-6632-33db-2401eabe574d/190296491412.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Bad Habits',
    artist: 'Ed Sheeran',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/c5/d8/c6/c5d8c675-63e3-6632-33db-2401eabe574d/190296491412.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Ela Já Tá Louca',
    artist: 'Anderson Neiff & John Johnis',
    image: 'https://images.shazam.com/coverart/t598392925_s800.jpg',
  },
  {
    trackName: 'Toxic',
    artist: 'BoyWithUke',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/79/38/6e/79386e86-6425-49b7-b4c2-81dae83f3cf0/21UM1IM35155.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Hrs and Hrs',
    artist: 'Muni Long',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/bd/1c/a1/bd1ca183-18fa-d168-5d07-803c127579ee/11.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Tu Me Manques (Missing You)',
    artist: 'Mia Martina',
    image: 'https://images.shazam.com/coverart/t76023280_s800.jpg',
  },
  {
    trackName: 'Here In Spirit',
    artist: 'Jim James',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/cc/28/dd/cc28dd47-2e94-967f-95bf-aed3181cbf7e/00880882276652.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Sacrifice',
    artist: 'The Weeknd',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2f/22/a9/2f22a9a6-5af1-5846-a44e-ba016724ed69/21UM1IM58860.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'น้ำแดงน้ำส้ม',
    artist: 'JV.JARVIS',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/bd/72/29/bd7229dd-8d9a-8950-6460-aa8b552e82b0/cover.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Ca Plane Pour Moi',
    artist: 'Plastic Bertrand',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/7e/f6/1d/7ef61d85-15e4-4edf-f616-3cac8d0cd4a6/00602527570020.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'МАЛИНОВАЯ ЛАДА',
    artist: 'GAYAZOV$ BROTHER$',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/4c/1e/4d/4c1e4d0d-865c-1d46-52fd-a628d8caacb9/190296399336.jpg/400x400cc.jpg',
  },
  {
    trackName: 'All The Things She Said',
    artist: 't.A.T.u.',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7d/ac/83/7dac83f6-dbb0-b7e9-21a1-b0387a5c8f39/00602537201525.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'When I R.I.P.',
    artist: 'Labrinth',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/6f/f4/05/6ff40578-72c8-e9ed-5413-96dc4874cc86/886447932223.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Притяжение',
    artist: 'ETOLUBOV',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/af/75/39/af7539b8-2d54-f5be-5512-b3ef35a7f41b/190296494284.jpg/400x400cc.jpg',
  },
  {
    trackName: 'edamame',
    artist: 'bbno$ Feat. Rich Brian',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/dc/31/0f/dc310fea-277a-c6f6-4163-49a415400873/653738610920.png/400x400cc.jpg',
  },
  {
    trackName: 'Fingers Crossed',
    artist: 'Lauren Spencer-Smith',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/a8/72/61/a8726153-e53f-9f57-fdfa-e032b969c81a/859752093125_cover.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Softcore',
    artist: 'The Neighbourhood',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/fc/d0/89/fcd0899c-2236-a726-9ce2-ebb110e2204d/886447414545.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Taca a Xereca pra Mim',
    artist: 'MC Kaique da VP',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2d/93/c5/2d93c520-8f38-e43e-cdf6-d70d77984473/cover.jpg/400x400cc.jpg',
  },
  {
    trackName: 'All For Us (From The HBO Original Series Euphoria)',
    artist: 'Labrinth & Zendaya',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/34/fc/1d/34fc1d8d-62ad-4676-afe6-a85491cb88ff/19UMGIM70965.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'My Universe',
    artist: 'Coldplay & BTS',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/fe/87/2c/fe872c2b-1c12-1c71-48f4-81bd5de6314d/190296384646.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Desesperados',
    artist: 'Rauw Alejandro & Chencho Corleone',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/58/13/c3/5813c326-a7fa-f792-77e1-8310d9c80742/886449738724.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Save Your Tears',
    artist: 'The Weeknd',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fd0-66cfff32f679/20UMGIM12176.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Tell It to My Heart',
    artist: 'Meduza Feat. Hozier',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/86/38/71/863871c2-c8c8-5181-5620-3f64f987a540/21UM1IM21350.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'LA FAMA',
    artist: 'ROSALÍA Feat. The Weeknd',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/55/00/65/550065e0-d9da-b41c-b9e9-288642ff90ed/886449700226.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Love Tonight',
    artist: 'Shouse',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/bf/52/2d/bf522d83-2845-ed86-fd9c-e2ab7cbf429b/191515989932_Cover.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Notion',
    artist: 'The Rare Occasions',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/09/54/1f/09541f3f-7013-a259-b468-88cf507f1319/075679761576.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Never Tear Us Apart',
    artist: 'INXS',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/5f/0c/2c/5f0c2cba-6f6b-01d6-8813-1dc541d7825b/081227820428.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Big Energy',
    artist: 'Latto',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/56/91/5d/56915d4d-ce19-4d28-b541-46977b6c0b1a/886449499885.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Bananza (Belly Dancer)',
    artist: 'Akon',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/15/48/43/15484338-46ed-afcd-eed1-febf803ffba3/00602517173705.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'One Dance',
    artist: 'Drake Feat. WizKid & Kyla',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'love nwantiti (North African Remix)',
    artist: 'CKay Feat. ElGrande Toto',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/01/bc/be/01bcbe03-62c9-c02f-f782-bd5e7821e125/190296805783.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Thunder',
    artist: 'Gabry Ponte, LUM!X & Prezioso',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/95/72/cc/9572cc6f-151a-c9eb-e1f1-76e0a2e88cd1/190296701436.jpg/400x400cc.jpg',
  },
  {
    trackName: 'UP',
    artist: 'INNA',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ec/30/92/ec309214-641d-8d70-7efe-90ae98978c6c/190296410307.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Sad Girlz Luv Money Remix',
    artist: 'Amaarae & Moliy Feat. Kali Uchis',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/8d/84/4c/8d844ca5-e42d-e01c-670e-9ed633aabb67/21UM1IM45433.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Trigger',
    artist: 'Dj Karri Feat. Lebzito, BL Zero & Prime de 1st',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/0c/38/d3/0c38d316-4a8e-b42c-745e-1b3940da4e62/198001595615.png/400x400cc.jpg',
  },
  {
    trackName: 'Nothing Breaks Like A Heart',
    artist: 'Mark Ronson Feat. Miley Cyrus',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/e0/80/ef/e080ef9c-23ea-de9e-5d09-b4780df4c022/886447539873.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Locked Out Of Heaven',
    artist: 'Bruno Mars',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/e0/a4/7c/e0a47c6f-005a-9f9f-ce29-8e858e2bcfcb/075679957283.jpg/400x400cc.jpg',
  },
])

const jpTrackData = (Prisma.TrackCreateInput = [
  {
    trackName: 'Yours',
    artist: 'JIN',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/45/ce/0d/45ce0d71-a400-c4d4-253b-299eaf34eb5e/8809829712307.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Christmas Tree',
    artist: 'V',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/23/73/8a/23738adc-2583-d271-0940-c0fb31278b65/191953153988.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Another Day Goes By',
    artist: 'Lizabet',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/77/00/4d/77004d05-cd75-fd91-6574-0c2596eef6ab/4547366548389.jpg/400x400cc.jpg',
  },
  {
    trackName: 'KokoroToIuNaNoFukakai',
    artist: 'Ado',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/24/e9/c2/24e9c269-bee0-62e0-6de6-257db163ee5a/21UM1IM54074.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'W / X / Y',
    artist: 'Tani Yuuki',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/dd/ee/e8/ddeee880-1c29-2473-2ee8-e56706dda64e/859757589333_cover.jpg/400x400cc.jpg',
  },
  {
    trackName: 'なんでもないよ、',
    artist: 'Macaroni Empitsu',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/14/d4/ec/14d4ecbc-e637-3d21-3450-bc52cfccaa5a/4517331073291.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Oui',
    artist: 'Jeremih',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/b3/9d/f9/b39df97f-4443-9375-fd2b-7b6b8f39691c/15UMGIM68955.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: '悪魔の子',
    artist: 'ヒグチアイ',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/da/34/aa/da34aa4e-963d-da81-973a-c4baf699c03d/PCSP_03907_A.jpg/400x400cc.jpg',
  },
  {
    trackName: 'キャラクター',
    artist: 'Ryokuoushoku Shakai',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/ff/18/62/ff186214-7344-0a65-1d99-0cf8f512a67e/4547366544916.jpg/400x400cc.jpg',
  },
  {
    trackName: '残響散歌',
    artist: 'Aimer',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/c9/40/9e/c9409e84-c0ea-c389-3be3-2343ec3dfb3b/4547366539806.jpg/400x400cc.jpg',
  },
  {
    trackName: 'WA DA DA',
    artist: 'Kep1er',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/30/ca/74/30ca745e-574c-2e30-d947-9ef5d80a5178/888272092226_Cover.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Tie Me Down',
    artist: 'Gryffin Feat. Elley Duhé',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/78/df/42/78df4296-75a1-da72-aa8a-f4a353245702/19UMGIM89771.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Anarchy',
    artist: 'OFFICIAL HIGE DANDISM',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/8c/cf/30/8ccf3041-a153-ffad-3ce0-fb73245a6f90/PCSP_03883_A.jpg/400x400cc.jpg',
  },
  {
    trackName: 'スパークル',
    artist: '幾田りら',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/e1/e7/d2/e1e7d23c-bd17-7b05-b32c-4b23f0623685/196626142849.jpg/400x400cc.jpg',
  },
  {
    trackName: 'ベテルギウス',
    artist: 'Yuuri',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d9/de/51/d9de5146-6d3a-2002-bc8f-77e2e47c1c3b/4547366544138.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Stay',
    artist: 'The Kid LAROI & Justin Bieber',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/a8/3a/22/a83a22f7-af18-7ef6-a7de-74816c532a44/886449475421.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Heart',
    artist: 'aimyon',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/a9/d4/e9/a9d4e96c-d6f1-29dd-16be-bedbba39057f/190296415074.jpg/400x400cc.jpg',
  },
  {
    trackName: '逆夢',
    artist: 'King Gnu',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/9d/86/22/9d8622df-0329-fa20-bc8c-a21de56d6049/4547366544121.jpg/400x400cc.jpg',
  },
  {
    trackName: "You're Perfect",
    artist: 'Charly Black',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/51/36/ac/5136ac9a-5f7b-fe9f-55fe-fb52c468a21b/21UM1IM33952.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'おもかげ (produced by Vaundy)',
    artist: 'milet, Aimer & 幾田りら',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ec/1d/a0/ec1da08d-502e-9d7e-10d5-2dd301a0314f/4547366542912.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Sea of Light',
    artist: 'yuga',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/5e/08/34/5e083434-e7d6-54e8-1bba-d9d857b28e7c/4525853303499.jpg/400x400cc.jpg',
  },
  {
    trackName: 'はじまりのおわり',
    artist: 'TENSONG',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/fc/ed/6c/fced6cd0-f17d-8e99-c4b8-67a095296714/859757783731_cover.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Shock!',
    artist: 'sakanaction',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/51/57/ce/5157ce68-2d0f-74ea-1882-02c36a2ad47b/VEATP-39520.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Supermarket Flowers',
    artist: 'Ed Sheeran',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg/400x400cc.jpg',
  },
  {
    trackName: '未開封の恋',
    artist: 'Leina',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/44/51/89/44518945-18d9-14aa-4107-e5158f8d52c3/bigup13033288.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Face Off',
    artist: 'Tech N9ne, Joey Cool, King Iso & Dwayne Johnson',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/91/a0/6f/91a06fc5-ef89-4618-323e-a70afe810881/850033746068_Cover.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Scarlet Police Getto Patrol 24 hour',
    artist: 'IOSYS',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/4c/98/2b/4c982b25-027c-679f-9293-db2b1e866a0d/4580547310719.jpg/400x400cc.jpg',
  },
  {
    trackName: '一途',
    artist: 'King Gnu',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/34/d7/ec/34d7eca3-c198-f848-a523-e84877b859e2/4547366542400.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Thunder',
    artist: 'Gabry Ponte, LUM!X & Prezioso',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/95/72/cc/9572cc6f-151a-c9eb-e1f1-76e0a2e88cd1/190296701436.jpg/400x400cc.jpg',
  },
])

const krTrackData = (Prisma.TrackCreateInput = [
  {
    trackName: 'Christmas Tree',
    artist: 'V',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/23/73/8a/23738adc-2583-d271-0940-c0fb31278b65/191953153988.jpg/400x400cc.jpg',
  },
  {
    trackName: 'The Giving Tree (Inst.)',
    artist: '이승윤',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/98/21/f2/9821f226-2881-b64d-34e4-9db1170271be/191953156569.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Consolation',
    artist: 'Kwon Jin Ah',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/3f/f3/69/3ff36964-e626-b058-49d3-573b1547312c/cover.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Drawer',
    artist: '10cm',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/79/f8/77/79f8777f-e9c6-eec1-73d5-3f46319c4f8b/dj.lkwtyvcb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Polaroid Love',
    artist: 'ENHYPEN',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/41/28/1f/41281f48-8dc9-45aa-bc47-1ffaf7eb913a/192641819957_Cover.jpg/400x400cc.jpg',
  },
  {
    trackName: 'abcdefu',
    artist: 'GAYLE',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/a8/28/f3/a828f3eb-74a6-96c9-356f-940da7905f54/075679774309.jpg/400x400cc.jpg',
  },
  {
    trackName: 'DrunKen Confession',
    artist: 'Kim Min Seok',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/1c/fa/26/1cfa262a-1389-9099-4423-20b5d80cecfe/190296294983.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Step Back',
    artist: 'GOT the beat',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/97/b2/90/97b2905a-5dcb-428b-cdbf-4b975fd25e68/Cover_GOT_the_beat_Step_Back.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Maybe if',
    artist: 'BIBI',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/01/69/fa/0169faec-1372-42a8-3b79-bb55bb9c0964/191953153384.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Summer Rain (Inst.)',
    artist: 'SAM KIM',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/48/b3/2a48b312-434c-b113-17cb-a7d60fefd05c/191953157214.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Love Always Run Away',
    artist: 'Lim Young Woong',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/a3/95/ee/a395eea4-71b4-df6f-0d47-f305fd084563/191953142210.jpg/400x400cc.jpg',
  },
  {
    trackName: 'If You Lovingly Call My Name',
    artist: 'GyeongseoYeji & 전건호',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/83/46/3d/83463d03-168d-516e-ed7b-c200ab99417f/cover-_-_1.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Drama',
    artist: 'IU',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b6/d7/03/b6d70395-380c-42b1-6cab-04d51c1c4d9d/cover_KM0014526_1.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Horangsuwolga',
    artist: 'TopHyun',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/66/3e/30/663e309c-fc9a-090e-ae73-c30c41411d22/cover_KM0014633_1.jpg/400x400cc.jpg',
  },
  {
    trackName: "Can't Control Myself",
    artist: 'TAEYEON',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/6a/a3/5e/6aa35e20-0686-9b9b-a80d-9f9536132e87/cover.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Die Young',
    artist: 'Ke$ha',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/61/99/9d/61999d37-f2f5-d716-e663-06aa7ea56441/886443748880.jpg/400x400cc.jpg',
  },
  {
    trackName: 'parachute',
    artist: 'John K',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/d0/6b/5d/d06b5db4-4b21-881d-8bed-6d49f874cc91/886448801030.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Think About You',
    artist: 'Joosiq',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/10/a8/cd/10a8cd2e-d251-2794-c1e1-268c5383ec1b/190296441844.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Home (Prod. by Nam Hye Seung)',
    artist: 'Janet Suhh',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2f/ce/83/2fce8385-d882-102a-66fb-74a58441140f/191953155395.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Title',
    artist: 'Meghan Trainor',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/0b/ca/19/0bca19d8-6e34-d811-d169-dbf8855f71f7/mzm.nkngwyss.jpg/400x400cc.jpg',
  },

  {
    trackName: 'Enemy (From the series Arcane League of Legends)',
    artist: 'Imagine Dragons, Arcane & League of Legends',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/5d/d8/fc/5dd8fc36-85ad-e7c9-8288-e7d12d332934/21UM1IM39402.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Off My Face',
    artist: 'Justin Bieber',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/e0/92/da/e092da2d-9f6d-11dc-7843-2021e95a2b61/21UMGIM17518.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Easy On Me',
    artist: 'Adele',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/400x400cc.jpg',
  },
  {
    trackName: 'When it snows',
    artist: 'Lee Mujin Feat. HEIZE',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/26/2d/da/262ddac9-329d-fb00-8e3f-1d6f2d3219e5/cover_KM0014407_1.jpg/400x400cc.jpg',
  },
  {
    trackName: 'INDUSTRY BABY',
    artist: 'Lil Nas X & Jack Harlow',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/9f/cf/dc/9fcfdc19-7a61-3836-defb-35d817529b25/886449511440.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Oui',
    artist: 'Jeremih',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/b3/9d/f9/b39df97f-4443-9375-fd2b-7b6b8f39691c/15UMGIM68955.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Suddenly',
    artist: "BE'O",
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/56/8d/12/568d12d0-ef65-277e-1eba-4ba9454ad6c9/888272079661_Cover.jpg/400x400cc.jpg',
  },
  {
    trackName: 'ELEVEN',
    artist: 'IVE',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/d3/63/4a/d3634a37-8dd2-8fc6-d138-895b3d237611/IVE_OnlineCover_fix.jpg/400x400cc.jpg',
  },
  {
    trackName: 'SMILEY',
    artist: 'YENA Feat. BIBI',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/77/12/3c/77123ccd-0e15-2388-ff7f-d456f57b56a4/888272093742_Cover.jpg/400x400cc.jpg',
  },
  {
    trackName: 'DM',
    artist: 'fromis_9',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f7/1e/6a/f71e6a37-19e9-8d33-baa2-7d71c76d440f/192641683183_Cover.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Heat Waves',
    artist: 'Glass Animals',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/da/8b/77/da8b7731-6f4f-eacf-5e74-8b23389eefa1/20UMGIM03371.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Stay',
    artist: 'The Kid LAROI & Justin Bieber',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/a8/3a/22/a83a22f7-af18-7ef6-a7de-74816c532a44/886449475421.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Dreams Come True',
    artist: 'aespa',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/70/d7/4a/70d74a73-cb0e-eb09-4662-c2bdc7eb723a/dj.oabkpkud.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Manila',
    artist: 'Young Cocoa',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/40/14/56/401456bc-f8ef-e141-22c3-7b14584bd36d/886449665945.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Bad Habits',
    artist: 'Ed Sheeran',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/c5/d8/c6/c5d8c675-63e3-6632-33db-2401eabe574d/190296491412.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Wake Up',
    artist: 'GAEKO, Ourealgoat, SINCE, Ahn byeong woong, Tabber & Gwangil Jo',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/41/4a/06/414a06e8-530b-326d-722c-4c4c08c62525/888272089127_Cover.jpg/400x400cc.jpg',
  },
  {
    trackName: 'All The Things She Said',
    artist: 't.A.T.u.',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7d/ac/83/7dac83f6-dbb0-b7e9-21a1-b0387a5c8f39/00602537201525.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Storm Song',
    artist: 'Phildel',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/8e/7f/d1/8e7fd1c1-005a-43e4-ea1f-b45fd59caadf/602537051335_cover.tif/400x400cc.jpg',
  },
  {
    trackName: 'My Universe',
    artist: 'Coldplay & BTS',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/fe/87/2c/fe872c2b-1c12-1c71-48f4-81bd5de6314d/190296384646.jpg/400x400cc.jpg',
  },
  {
    trackName: 'OHAYO MY NIGHT',
    artist: 'D-Hack & PATEKO',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/3f/3a/99/3f3a99f2-cc4f-7e25-9f9a-2ebddad51118/Cover_D-Hack_PATEKO_D_PATEKOMORI.png/400x400cc.jpg',
  },
  {
    trackName: 'Every Second',
    artist: 'Mina Okabe',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/00/4e/67/004e6758-f823-3aed-5051-59ffe377e791/21UMGIM62298.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'The Christmas Song',
    artist: 'Nat King Cole',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/97/5f/11/975f117e-eab4-27a0-ff4a-cd6709ed95c4/18UMGIM52342.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Dance Monkey',
    artist: 'Tones And I',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/87/ed/42/87ed4279-d8d7-840f-90b5-2bffe34699ef/075679839237.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Love Letter',
    artist: 'Anthony Lazaro',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/10/7a/8e/107a8ed3-777a-2714-42f7-b361ca41e589/artwork.jpg/400x400cc.jpg',
  },
  {
    trackName: "I'm In Love With A Monster",
    artist: 'Fifth Harmony',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/68/18/2b/68182bf5-9966-592a-9b4d-23bc598ae786/dj.ehopqips.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Kiss Me More',
    artist: 'Doja Cat Feat. SZA',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/eb/63/fc/eb63fc4c-f36b-5981-a790-8f05c8dd2df1/886449138852.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Because',
    artist: 'ASH ISLAND',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/71/d5/35/71d53593-a1e2-e73b-4dc2-7035e38424fc/888272094107_Cover.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Our Beloved Summer (Opening Title Version)',
    artist: 'Kim Kyung Hee',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/e8/f3/37/e8f33759-d399-8357-5c80-fbe1af01ecf1/191953159485.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Runaway',
    artist: 'AURORA',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/d2/cf/f8/d2cff886-78df-f62c-1bf7-98089cb476dc/44003184138_1.jpg/400x400cc.jpg',
  },
  {
    trackName: "don't miss me",
    artist: 'Claire Rosinkranz',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/c0/b0/65/c0b065d9-121a-afe5-e466-d8e2c262547c/21UM1IM43969.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Sunrise',
    artist: 'Kygo Feat. Jason Walker',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4d/e1/5d/4de15d20-5038-ccc4-f0bb-dc7ac8417dbc/0617465915253.png/400x400cc.jpg',
  },
  {
    trackName: 'Sea of Dream',
    artist: 'Adios Audio',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/4a/64/7c/4a647c3f-40c3-3963-1dd2-8c96825c2efd/8809829724454.jpg/400x400cc.jpg',
  },
  {
    trackName: 'This Love',
    artist: 'Davichi',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/e9/9e/9a/e99e9af5-780f-81bc-48a5-ea2f30bec2b2/8809492017990.jpg/400x400cc.jpg',
  },
  {
    trackName: '12:45 (Stripped)',
    artist: 'Etham',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/56/34/62/563462cd-d93d-40d8-8096-4f40ee408b3f/00602577304385.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Leave The Door Open',
    artist: 'Bruno Mars, Anderson .Paak & Silk Sonic',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/a8/b9/60/a8b9607e-fd16-b9cd-4c98-0422dc32ca09/075679772916.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Levitating',
    artist: 'Dua Lipa Feat. DaBaby',
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/d8/8f/4b/d88f4b28-d500-03e2-adc0-62dba9342ea6/190295092665.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Every Moment Of You (Original)',
    artist: 'Sung Si Kyung',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/a3/01/85/a3018599-010c-56c0-b15e-93ffd9ec5d3f/OST_P.7.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Love',
    artist: 'Keyshia Cole',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/99/01/e5/9901e535-b25b-c527-d494-a894303f1c21/06UMGIM24715.rgb.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Someday, the Boy',
    artist: 'Kim Feel',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/c2/3e/70/c23e703e-5a19-2d54-6ec2-6616aff0accf/8809717439170.jpg/400x400cc.jpg',
  },
  {
    trackName: 'Permission to Dance',
    artist: 'BTS',
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/66/28/6c/66286c9f-6bea-4f99-ec15-507b0c95dc04/196006991739_Cover.jpg/400x400cc.jpg',
  },
])
async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
    for (const d of usTrackData) {
      d.region = 'us'
      const track = await prisma.track.create({
        data: d,
      })
      console.log(track)
    }
    for (const j of jpTrackData) {
      j.region = 'jp'
      const track = await prisma.track.create({
        data: j,
      })
      console.log('kr', track)
    }
    for (const k of krTrackData) {
      k.region = 'kr'
      const track = await prisma.track.create({
        data: k,
      })
      console.log('jp', track)
    }
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
