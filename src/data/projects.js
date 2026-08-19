
const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

function withPublicAssetBase(value) {
  if (typeof value === 'string') {
    return value.startsWith('/images/') ? publicAsset(value) : value
  }

  if (Array.isArray(value)) {
    return value.map(withPublicAssetBase)
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, withPublicAssetBase(item)])
    )
  }

  return value
}

export const projects = withPublicAssetBase([

  // {
  //   slug: 'sampoerna-server',
  //   title: 'sampoerna server detection system',
  //   status: 'coming-soon',
  //   statusLabel: 'coming soon',
  //   type: 'web app',
  //   coreTech: 'Unknown',
  //   year: 'Unknown',
  //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
  //   shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
  //   previewImg: '/images/sp-project-img-more-screen-placeholder.webp',
  //   challenge: '',
  //   solution: '',
  //   features: [],
  //   tools: [
  //     { name: 'unknown', src: '/images/tools/unknown.png' },
  //     { name: 'unknown', src: '/images/tools/unknown.png' },
  //     { name: 'unknown', src: '/images/tools/unknown.png' }
  //   ],
  //   gallery: [],
  //   devicePreviews: [],
  //   pageFile: null
  // },

  // revolution property v2
  {
    slug: 'revolution-property-v2',
    title: 'revolution property v2',
    status: 'coming-soon',
    statusLabel: 'coming soon',
    type: 'landing page',
    coreTech: 'azure',
    year: '2026',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/sp-project-img-more-screen-placeholder.webp',
    challenge: '',
    solution: '',
    features: [],
    tools: [
      { name: 'vs code', src: '/images/tools/vscode.svg' },
      { name: 'azure', src: '/images/tools/azure.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    gallery: [],
    devicePreviews: [],
    pageFile: null
  },

  // NJP archive
  {
    slug: 'njp-archive',
    title: 'NJP archive',
    status: 'ongoing',
    statusLabel: 'ongoing',
    type: 'windows app',
    coreTech: 'maui',
    year: '2026',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-njparc/sp-img-prj-njparc-02.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-njparc/sp-img-prj-njparc-02.webp' } },
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: 'c#', src: '/images/tools/csharp.svg' },
      { name: '.net', src: '/images/tools/dotnet.svg' },
      { name: 'maui', src: '/images/tools/maui.png' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-njparc/sp-img-prj-njparc-01.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      }
    ],
    gallery: Array.from({ length: 4 }, (_, i) => ({
      src: `/images/proj-njparc/sp-img-prj-njparc-${String(i + 1).padStart(2, '0')}.webp`,
      title: '',
      description: ''
    })),
    pageFile: 'njp-archive-project'
  },

  // triyana resort carangsari
  {
    slug: 'triyana-resort-carangsari',
    title: 'triyana resort carangsari',
    status: 'ongoing',
    statusLabel: 'ongoing',
    type: 'website',
    coreTech: 'azure',
    year: '2026',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-carang/sp-img-prj-carang-head-laptop.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-carang/sp-img-prj-carang-head-laptop.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-carang/sp-img-prj-carang-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-carang/sp-img-prj-carang-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'vs code', src: '/images/tools/vscode.svg' },
      { name: 'azure', src: '/images/tools/azure.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-carang/sp-img-prj-carang-head-laptop.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-carang/sp-img-prj-carang-head-tablet.webp',
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-carang/sp-img-prj-carang-head-hp.webp',
        }
      }
    ],
    gallery: [],
    pageFile: 'triyana-resort-carangsari-project'
  },

  // triyana group
  {
    slug: 'triyana-group',
    title: 'triyana group',
    status: 'finished',
    statusLabel: 'finished',
    type: 'website',
    coreTech: 'azure',
    year: '2026',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-tgroup/sp-img-prj-tgroup-head-laptop.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-tgroup/sp-img-prj-tgroup-head-laptop.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-tgroup/sp-img-prj-tgroup-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-tgroup/sp-img-prj-tgroup-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'vs code', src: '/images/tools/vscode.svg' },
      { name: 'azure', src: '/images/tools/azure.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-tgroup/sp-img-prj-tgroup-head-laptop.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-tgroup/sp-img-prj-tgroup-head-tablet.webp',
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-tgroup/sp-img-prj-tgroup-head-hp.webp',
        }
      }
    ],
    gallery: [],
    pageFile: 'triyana-group-project'
  },

  // RV referral area
  {
    slug: 'rv-referral-area',
    title: 'RV referral area',
    status: 'ongoing',
    statusLabel: 'ongoing',
    type: 'web app',
    coreTech: 'blazor',
    year: '2026',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-rfarea/sp-img-prj-rfarea-01.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-rfarea/sp-img-prj-rfarea-01.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-rfarea/sp-img-prj-rfarea-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-rfarea/sp-img-prj-rfarea-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: '.net', src: '/images/tools/dotnet.svg' },
      { name: 'c#', src: '/images/tools/csharp.svg' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-rfarea/sp-img-prj-rfarea-01.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-rfarea/sp-img-prj-rfarea-head-tablet.webp',
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-rfarea/sp-img-prj-rfarea-head-hp.webp',
        }
      }
    ],
    gallery: Array.from({ length: 1 }, (_, i) => ({
      src: `/images/proj-rfarea/sp-img-prj-rfarea-${String(i + 1).padStart(2, '0')}.webp`,
      title: '',
      description: ''
    })),
    pageFile: 'rv-referral-area-project'
  },

  // RV referral partner'
  {
    slug: 'rv-referral-partner',
    title: 'RV referral partner',
    status: 'finished',
    statusLabel: 'finished',
    type: 'landing page',
    coreTech: 'azure',
    year: '2026',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-rpart/sp-img-prj-rpart-head-laptop.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-rpart/sp-img-prj-rpart-head-laptop.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-rpart/sp-img-prj-rpart-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-rpart/sp-img-prj-rpart-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'vs code', src: '/images/tools/vscode.svg' },
      { name: 'azure', src: '/images/tools/azure.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-rpart/sp-img-prj-rpart-head-laptop.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rpart/sp-vid-prj-rpart-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-rpart/sp-img-prj-rpart-head-tablet.webp',
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-rpart/sp-img-prj-rpart-head-hp.webp',
        }
      }
    ],
    gallery: [],
    pageFile: 'rv-referral-partner-project'
  },

  // rv membership
  {
    slug: 'rv-membership',
    title: 'RV membership',
    status: 'finished',
    statusLabel: 'finished',
    type: 'landing page',
    coreTech: 'azure',
    year: '2025',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-rvmbr/sp-img-prj-rvmbr-head-laptop.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-rvmbr/sp-img-prj-rvmbr-head-laptop.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-rvmbr/sp-img-prj-rvmbr-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-rvmbr/sp-img-prj-rvmbr-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'vs code', src: '/images/tools/vscode.svg' },
      { name: 'azure', src: '/images/tools/azure.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-rvmbr/sp-img-prj-rvmbr-head-laptop.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-rvmbr/sp-img-prj-rvmbr-head-tablet.webp',
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-rvmbr/sp-img-prj-rvmbr-head-hp.webp',
        }
      }
    ],
    gallery: [],
    pageFile: 'rv-membership-project'
  },

  // triyana glamping village
  {
    slug: 'triyana-glamping-village',
    title: 'triyana glamping village',
    status: 'finished',
    statusLabel: 'finished',
    type: 'landing page',
    coreTech: 'azure',
    year: '2024',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-glmp/sp-img-prj-glmp-head-laptop.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-glmp/sp-img-prj-glmp-head-laptop.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-glmp/sp-img-prj-glmp-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-glmp/sp-img-prj-glmp-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'vs code', src: '/images/tools/vscode.svg' },
      { name: 'azure', src: '/images/tools/azure.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-glmp/sp-img-prj-glmp-head-laptop.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-glmp/sp-img-prj-glmp-head-tablet.webp',
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-glmp/sp-img-prj-glmp-head-hp.webp',
        }
      }
    ],
    gallery: [],
    pageFile: 'triyana-glamping-village-project'
  },

  // njp ppn
  {
    slug: 'njp-ppn',
    title: 'NJP PPN',
    status: 'ongoing',
    statusLabel: 'ongoing',
    type: 'windows app',
    coreTech: 'maui',
    year: '2024',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-njpppn/sp-img-prj-njpppn-01.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-njpppn/sp-img-prj-njpppn-01.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: 'c#', src: '/images/tools/csharp.svg' },
      { name: '.net', src: '/images/tools/dotnet.svg' },
      { name: 'maui', src: '/images/tools/maui.png' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-njpppn/sp-img-prj-njpppn-02.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
    ],
    gallery: Array.from({ length: 4 }, (_, i) => ({
      src: `/images/proj-njpppn/sp-img-prj-njpppn-${String(i + 1).padStart(2, '0')}.webp`,
      title: '',
      description: ''
    })),
    pageFile: 'njp-ppn-project'
  },

  // njp admin v2
  {
    slug: 'njp-admin-v2',
    title: 'NJP admin v2',
    status: 'ongoing',
    statusLabel: 'ongoing',
    type: 'web app',
    coreTech: 'blazor',
    year: '2024',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-njpblz/sp-img-prj-njpblz-01.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-njpblz/sp-img-prj-njpblz-04.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-njpblz/sp-img-prj-njpblz-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-njpblz/sp-img-prj-njpblz-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: '.net', src: '/images/tools/dotnet.svg' },
      { name: 'c#', src: '/images/tools/csharp.svg' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-njpblz/sp-img-prj-njpblz-04.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-njpblz/sp-img-prj-njpblz-head-tablet.webp',
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-njpblz/sp-img-prj-njpblz-head-hp.webp',
        }
      }
    ],
    gallery: Array.from({ length: 4 }, (_, i) => ({
      src: `/images/proj-njpblz/sp-img-prj-njpblz-${String(i + 1).padStart(2, '0')}.webp`,
      title: '',
      description: ''
    })),
    pageFile: 'njp-admin-v2-project'
  },

  // siceritea
  {
    slug: 'sinceritea',
    title: 'sinceritea',
    status: 'finished',
    statusLabel: 'finished',
    type: 'landing page',
    coreTech: 'azure',
    year: '2024',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-scrt/sp-img-prj-scrt-head-laptop.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-scrt/sp-img-prj-scrt-head-laptop.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-scrt/sp-img-prj-scrt-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-scrt/sp-img-prj-scrt-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'vs code', src: '/images/tools/vscode.svg' },
      { name: 'azure', src: '/images/tools/azure.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-scrt/sp-img-prj-scrt-head-laptop.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-scrt/sp-img-prj-scrt-head-tablet.webp',
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-scrt/sp-img-prj-scrt-head-hp.webp',
        }
      }
    ],
    gallery: [],
    pageFile: 'sinceritea-project'
  },

  // kemenkumham
  {
    slug: 'kemenkumham',
    title: 'kemenkumham',
    status: 'finished',
    statusLabel: 'finished',
    type: 'backend',
    coreTech: 'API',
    year: '2023',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-keuham/sp-img-prj-ham.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-keuham/sp-img-prj-ham.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: 'vs code', src: '/images/tools/vscode.svg' },
      { name: 'postman', src: '/images/tools/postman.svg' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' }
    ],
    devicePreviews: [],
    gallery: [],
    pageFile: 'kemenkumham-project'
  },

  // njp admin
  {
    slug: 'njp-admin',
    title: 'NJP admin',
    status: 'finished',
    statusLabel: 'finished',
    type: 'windows app',
    coreTech: 'winforms',
    year: '2023 - 2024',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-njpwf/sp-img-prj-njpwf-01.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-njpwf/sp-img-prj-njpwf-01.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: '.net', src: '/images/tools/dotnet.svg' },
      { name: 'winforms', src: '/images/tools/winforms.png' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' },
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-njpwf/sp-img-prj-njpwf-02.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
    ],
    gallery: Array.from({ length: 2 }, (_, i) => ({
      src: `/images/proj-njpwf/sp-img-prj-njpwf-${String(i + 1).padStart(2, '0')}.webp`,
      title: '',
      description: ''
    })),
    pageFile: 'njp-admin-project'
  },

  // akas penjualan
  {
    slug: 'akas-penjualan',
    title: 'akas penjualan',
    status: 'finished',
    statusLabel: 'finished',
    type: 'web app',
    coreTech: 'blazor',
    year: '2023 - 2025',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-aksfo/sp-img-prj-aksfo-01.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-aksfo/sp-img-prj-aksfo-head-laptop.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-aksfo/sp-img-prj-aksfo-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-aksfo/sp-img-prj-aksfo-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: '.net', src: '/images/tools/dotnet.svg' },
      { name: 'c#', src: '/images/tools/csharp.svg' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-aksfo/sp-img-prj-aksfo-head-laptop.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-aksfo/sp-img-prj-aksfo-head-tablet.webp',
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-aksfo/sp-img-prj-aksfo-head-hp.webp',
        }
      }
    ],
    gallery: Array.from({ length: 1 }, (_, i) => ({
      src: `/images/proj-aksfo/sp-img-prj-aksfo-${String(i + 1).padStart(2, '0')}.webp`,
      title: '',
      description: ''
    })),
    pageFile: 'akas-penjualan-project'
  },

  // akas admin
  {
    slug: 'akas-admin',
    title: 'akas admin',
    status: 'finished',
    statusLabel: 'finished',
    type: 'web app',
    coreTech: 'blazor',
    year: '2023 - 2025',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-aksbo/sp-img-prj-aksbo-01.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-aksbo/sp-img-prj-aksbo-head-laptop.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-aksbo/sp-img-prj-aksbo-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-aksbo/sp-img-prj-aksbo-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: '.net', src: '/images/tools/dotnet.svg' },
      { name: 'c#', src: '/images/tools/csharp.svg' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-aksbo/sp-img-prj-aksbo-head-laptop.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-aksbo/sp-img-prj-aksbo-head-tablet.webp',
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-aksbo/sp-img-prj-aksbo-head-hp.webp',
        }
      }
    ],
    gallery: Array.from({ length: 1 }, (_, i) => ({
      src: `/images/proj-aksbo/sp-img-prj-aksbo-${String(i + 1).padStart(2, '0')}.webp`,
      title: '',
      description: ''
    })),
    pageFile: 'akas-admin-project'
  },

  // pt. msl
  {
    slug: 'pt-msl',
    title: 'PT. MSL',
    status: 'finished',
    statusLabel: 'finished',
    type: 'landing page',
    coreTech: 'javascript',
    year: '2022',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-msl/sp-img-prj-msl-head-laptop.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-msl/sp-img-prj-msl-head-laptop.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-msl/sp-img-prj-msl-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-msl/sp-img-prj-msl-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'vs code', src: '/images/tools/vscode.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-msl/sp-img-prj-msl-head-laptop.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-msl/sp-img-prj-msl-head-tablet.webp',
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-msl/sp-img-prj-msl-head-hp.webp',
        }
      }
    ],
    gallery: [],
    pageFile: 'pt-msl-project'
  },

  //kemenkeu
  {
    slug: 'kemenkeu',
    title: 'kemenkeu',
    status: 'finished',
    statusLabel: 'finished',
    type: 'backend',
    coreTech: 'API',
    year: '2022',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-keuham/sp-img-prj-keu.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-keuham/sp-img-prj-keu.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: 'vs code', src: '/images/tools/vscode.svg' },
      { name: 'postman', src: '/images/tools/postman.svg' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' }
    ],
    devicePreviews: [],
    gallery: [],
    pageFile: 'kemenkeu-project'
  },

  // triyana residence
  {
    slug: 'triyana-residence',
    title: 'triyana residence',
    status: 'finished',
    statusLabel: 'finished',
    type: 'landing page',
    coreTech: 'javascript',
    year: '2022',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-trr/sp-img-prj-trr-head-laptop.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-trr/sp-img-prj-trr-head-laptop.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-trr/sp-img-prj-trr-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-trr/sp-img-prj-trr-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'vs code', src: '/images/tools/vscode.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-trr/sp-img-prj-trr-head-laptop.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-trr/sp-img-prj-trr-head-tablet.webp',
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-trr/sp-img-prj-trr-head-hp.webp',
        }
      }
    ],
    gallery: [],
    pageFile: 'triyana-residence-project'
  },

  // triyana villa
  {
    slug: 'triyana-villa',
    title: 'triyana villa',
    status: 'finished',
    statusLabel: 'finished',
    type: 'landing page',
    coreTech: 'javascript',
    year: '2022',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-trv/sp-img-prj-trv-head-laptop.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-trv/sp-img-prj-trv-head-laptop.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-trv/sp-img-prj-trv-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-trv/sp-img-prj-trv-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'vs code', src: '/images/tools/vscode.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-trv/sp-img-prj-trv-head-laptop.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-trv/sp-img-prj-trv-head-tablet.webp',
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-trv/sp-img-prj-trv-head-hp.webp',
        }
      }
    ],
    gallery: [],
    pageFile: 'triyana-villa-project'
  },

  // revolution property
  {
    slug: 'revolution-property',
    title: 'revolution property',
    status: 'finished',
    statusLabel: 'finished',
    type: 'landing page',
    coreTech: 'javascript',
    year: '2022',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-rvp/sp-img-prj-rvp-head-laptop.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-rvp/sp-img-prj-rvp-head-laptop.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-rvp/sp-img-prj-rvp-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-rvp/sp-img-prj-rvp-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'vs code', src: '/images/tools/vscode.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-rvp/sp-img-prj-rvp-head-laptop.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-rvp/sp-img-prj-rvp-head-tablet.webp',
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-rvp/sp-img-prj-rvp-head-hp.webp',
        }
      }
    ],
    gallery: [],
    pageFile: 'revolution-property-project'
  },

  // revo member area
  {
    slug: 'revolution-member-area',
    title: 'revolution member area',
    status: 'ongoing',
    statusLabel: 'ongoing',
    type: 'web app',
    coreTech: 'blazor',
    year: '2022',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-mmbr/sp-img-prj-mmbr-01.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-mmbr/sp-img-prj-mmbr-04.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-mmbr/sp-img-prj-mmbr-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-mmbr/sp-img-prj-mmbr-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: '.net', src: '/images/tools/dotnet.svg' },
      { name: 'c#', src: '/images/tools/csharp.svg' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-mmbr/sp-img-prj-mmbr-04.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-mmbr/sp-img-prj-mmbr-head-tablet.webp',
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-mmbr/sp-img-prj-mmbr-head-hp.webp',
        }
      }
    ],
    gallery: Array.from({ length: 10 }, (_, i) => ({
      src: `/images/proj-mmbr/sp-img-prj-mmbr-${String(i + 1).padStart(2, '0')}.webp`,
      title: '',
      description: ''
    })),
    pageFile: 'member-area-project'
  },

  // hamilku admin
  {
    slug: 'hamilku-admin',
    title: 'hamilku admin',
    status: 'finished',
    statusLabel: 'finished',
    type: 'web app',
    coreTech: 'blazor',
    year: '2022 - 2025',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-hmlad/sp-img-prj-hmlad-01.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-hmlad/sp-img-prj-hmlad-01.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: '.net', src: '/images/tools/dotnet.svg' },
      { name: 'c#', src: '/images/tools/csharp.svg' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'img',
          src: '/images/proj-hmlad/sp-img-prj-hmlad-01.webp'
        }
      }
    ],
    gallery: Array.from({ length: 1 }, (_, i) => ({
      src: `/images/proj-hmlad/sp-img-prj-hmlad-${String(i + 1).padStart(2, '0')}.webp`,
      title: '',
      description: ''
    })),
    pageFile: 'hamilku-admin-project'
  },

  // hamilku nakes
  {
    slug: 'hamilku-nakes',
    title: 'hamilku nakes',
    status: 'finished',
    statusLabel: 'finished',
    type: 'web app',
    coreTech: 'blazor',
    year: '2022 - 2025',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-hmlnk/sp-img-prj-hmlnk-01.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-hmlnk/sp-img-prj-hmlnk-01.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-hmlnk/sp-img-prj-hmlnk-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-hmlnk/sp-img-prj-hmlnk-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: '.net', src: '/images/tools/dotnet.svg' },
      { name: 'c#', src: '/images/tools/csharp.svg' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-hmlnk/sp-img-prj-hmlnk-01.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-hmlnk/sp-img-prj-hmlnk-head-tablet.webp'
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-hmlnk/sp-img-prj-hmlnk-head-hp.webp'
        }
      }
    ],
    gallery: Array.from({ length: 5 }, (_, i) => ({
      src: `/images/proj-hmlnk/sp-img-prj-hmlnk-${String(i + 1).padStart(2, '0')}.webp`,
      title: '',
      description: ''
    })),
    pageFile: 'hamilku-nakes-project'
  },

  // hamilku
  {
    slug: 'hamilku',
    title: 'hamilku',
    status: 'finished',
    statusLabel: 'finished',
    type: 'web app',
    coreTech: 'blazor',
    year: '2022 - 2025',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    previewImg: '/images/proj-hml/sp-img-prj-hml-01.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-hml/sp-img-prj-hml-01.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-hml/sp-img-prj-hml-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-hml/sp-img-prj-hml-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: '.net', src: '/images/tools/dotnet.svg' },
      { name: 'c#', src: '/images/tools/csharp.svg' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-hml/sp-img-prj-hml-01.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-hml/sp-img-prj-hml-head-tablet.webp'
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-hml/sp-img-prj-hml-head-hp.webp'
        }
      }
    ],
    gallery: Array.from({ length: 5 }, (_, i) => ({
      src: `/images/proj-hml/sp-img-prj-hml-${String(i + 1).padStart(2, '0')}.webp`,
      title: '',
      description: ''
    })),
    pageFile: 'hamilku-project'
  },

  // property share unit
  {
    slug: 'property-share-unit',
    title: 'property share unit',
    status: 'finished',
    statusLabel: 'finished',
    type: 'landing page',
    coreTech: 'javascript',
    year: '2022',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-propsu/sp-img-prj-propsu.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-propsu/sp-img-prj-propsu.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'vs code', src: '/images/tools/vscode.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      { type: 'laptop', label: 'laptop preview', media: { kind: 'img', src: '/images/proj-propsu/sp-img-prj-propsu.webp' } }
    ],
    gallery: [],
    pageFile: 'property-share-unit-project'
  },

  // revo admin
  {
    slug: 'revo-admin',
    title: 'Revolution property admin',
    status: 'ongoing',
    statusLabel: 'ongoing',
    type: 'web app',
    coreTech: 'blazor',
    year: '2022',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni atque iure voluptatum dolorum neque laudantium veniam omnis doloremque delectus.',
    previewImg: '/images/proj-rvadm/sp-img-prj-rvadm-head-laptop.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-rvadm/sp-img-prj-rvadm-head-laptop.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-rvadm/sp-img-prj-rvadm-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-rvadm/sp-img-prj-rvadm-head-hp.webp' } }
    ],
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: '.net', src: '/images/tools/dotnet.svg' },
      { name: 'c#', src: '/images/tools/csharp.svg' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    devicePreviews: [
      {
        type: 'laptop', label: 'laptop preview', media: {
          kind: 'video',
          src: '',
          poster: '/images/proj-rvadm/sp-img-prj-rvadm-poster-laptop.webp',
          muted: true,
          autoplay: false,
          preload: 'none',
          sources: [{ src: '/images/proj-rvadm/sp-vid-prj-rvadm-laptop.mp4', type: 'video/mp4' }]
        }
      },
      {
        type: 'tablet', label: 'tablet preview', media: {
          kind: 'img',
          src: '/images/proj-rvadm/sp-img-prj-rvadm-poster-tablet.webp'
        }
      },
      {
        type: 'hp', label: 'mobile preview', media: {
          kind: 'img',
          src: '/images/proj-rvadm/sp-img-prj-rvadm-poster-hp.webp'
        }
      }
    ],
    gallery: Array.from({ length: 2 }, (_, i) => ({
      src: `/images/proj-rvadm/sp-img-prj-rvadm-${String(i + 1).padStart(2, '0')}.webp`,
      title: '',
      description: ''
    })),
    pageFile: 'revo-admin-project'
  },

  // sayang bunda
  {
    slug: 'sayang-bunda',
    title: 'sayang bunda',
    status: 'finished',
    statusLabel: 'finished',
    type: 'web app',
    coreTech: 'blazor',
    year: '2021',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, sapiente modi sunt quo harum aut dicta sit aperiam temporibus tempora.',
    shortDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, sapiente modi sunt quo harum aut dicta sit aperiam temporibus tempora.',
    previewImg: '/images/proj-sayang/sp-img-prj-sbun-01.webp',
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    features: ['Lorem ipsum dolor sit amet consectetur.'],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: '.net', src: '/images/tools/dotnet.svg' },
      { name: 'c#', src: '/images/tools/csharp.svg' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    gallery: Array.from({ length: 9 }, (_, i) => ({
      src: `/images/proj-sayang/sp-img-prj-sbun-${String(i + 1).padStart(2, '0')}.webp`,
      title: '',
      description: ''
    })),
    devicePreviews: [
      { type: 'laptop', label: 'desktop screen', media: { kind: 'img', src: '/images/proj-sayang/sp-img-prj-sbun-01.webp' } }
    ],
    pageFile: 'sayang-bunda-project'
  },

  // imi
  {
    slug: 'imi-admin',
    title: 'IMI Admin',
    status: 'finished',
    statusLabel: 'finished',
    type: 'Web App',
    coreTech: 'blazor',
    year: '2021',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum velit laboriosam ipsa ea. Repellendus velit voluptatibus magnam officiis expedita itaque ad, quisquam excepturi labore suscipit id molestias illum, unde exercitationem facere recusandae sunt veritatis. Rerum harum voluptatibus earum tempore!',
    shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa voluptates ab consectetur sit dolores aliquam blanditiis! Aspernatur, consequatur dolorem!',
    previewImg: '/images/proj-imi/sp-img-prj-imi-02.webp',
    challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse omnis repellendus quam natus excepturi numquam exercitationem repudiandae quod odit perferendis recusandae delectus impedit rerum maxime soluta laborum dignissimos, illo sequi! Alias eius in error voluptate ex doloribus commodi voluptatibus odio dolores placeat nemo fugit consequuntur repellendus, totam provident. Voluptates.',
    solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sint cum dolor exercitationem necessitatibus, assumenda sed iure obcaecati maiores, aliquam totam minima quisquam autem adipisci consequatur eius, temporibus officia facere itaque nemo recusandae. Dignissimos.',
    features: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, earum.',
      'Lorem ipsum dolor sit.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing.'
    ],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: '.net', src: '/images/tools/dotnet.svg' },
      { name: 'c#', src: '/images/tools/csharp.svg' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' },
      { name: 'javascript', src: '/images/tools/javascript.svg' }
    ],
    gallery: Array.from({ length: 9 }, (_, i) => ({
      src: `/images/proj-imi/sp-img-prj-imi-${String(i + 1).padStart(2, '0')}.webp`,
      title: '',
      description: ''
    })),
    devicePreviews: [
      { type: 'laptop', label: 'desktop screen', media: { kind: 'img', src: '/images/proj-imi/sp-img-prj-imi-01.webp' } },
    ],
    pageFile: 'imi-project'
  },

  // triyana admin view
  {
    slug: 'tav',
    title: 'triyana admin view',
    status: 'finished',
    statusLabel: 'finished',
    type: 'web app',
    coreTech: 'blazor',
    year: '2020',
    description: 'Tree Admin had served the business well as a desktop application, but it was time to bring it to the web. We transformed the legacy system into a responsive web platform while preserving every essential feature. The new interface works seamlessly across smartphones, tablets, and desktops, supporting multi-user access, notifications, customer data, sales, filtering, and Excel export. By reusing the existing database, all records remained intact, allowing the team to continue daily operations without interruption.',
    shortDesc: 'A web-based upgrade of Tree Admin that brings every legacy feature to the browser, with a responsive interface and a seamless handover of existing data.',
    previewImg: '/images/proj-tav/sp-img-prj-tav-03.webp',
    challenge: 'Tree Admin had served the business well as a desktop application, but the team needed something more flexible. The task was to upgrade it into a web-based platform, adapting every function from the legacy system to work within a completely different framework. On top of that, the new version had to be accessible from any device through a web browser, so staff could work wherever they happened to be.',
    solution: 'We replicated every function from the legacy application in the new one, making sure nothing was lost in the move. The interface was designed to be fully responsive, adapting comfortably to smartphones, tablets, and desktops alike. To ensure a smooth transition, we kept using the legacy application\'s database, so all existing records carried over and daily data entry continued without interruption.',
    features: [
      'Multi-user support with synchronized access for the team',
      'Notifications to keep users informed of important updates',
      'Customer data entry to keep client information organized',
      'Sales creation for quick and accurate transaction recording',
      'Data filtering to find and review records quickly',
      'Data export to Excel for easy reporting and analysis'
    ],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: '.net', src: '/images/tools/dotnet.svg' },
      { name: 'c#', src: '/images/tools/csharp.svg' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' },
      { name: 'html', src: '/images/tools/html5.svg' },
      { name: 'css', src: '/images/tools/css_old.svg' }
    ],
    gallery: Array.from({ length: 3 }, (_, i) => ({
      src: `/images/proj-tav/sp-img-prj-tav-${String(i + 1).padStart(2, '0')}.webp`,
      title: '',
      description: ''
    })),
    devicePreviews: [
      { type: 'laptop', label: 'desktop screen', media: { kind: 'img', src: '/images/proj-tav/sp-img-prj-tav-03.webp' } }
    ],
    pageFile: 'tav-project'
  },
  
  // tree
  {
    slug: 'tree-admin',
    title: 'TREE Admin',
    status: 'finished',
    statusLabel: 'finished',
    type: 'windows app',
    coreTech: 'winforms',
    year: '2020',
    description: 'For years, sales were recorded manually, making the process time-consuming, error-prone, and difficult to keep consistent. We digitized the workflow into a Windows-only multi-user application, keeping data synchronized across the team. Built with WinForms, the app uses a minimalist, user-friendly interface and stores customer details, sales, correspondence, transfer proofs, and complaints in an online database. It guides users through each sales step, turning paperwork into a simple and reliable daily workflow.',
    shortDesc: 'A Windows app that replaces manual sales recording with a simple digital workflow keeping customer data, sales, correspondence, and complaints in sync across the whole team.',
    previewImg: '/images/proj-tree/sp-img-prj-tree.webp',
    challenge: 'The business had long relied on manual sales recording, which made tracking transactions slow and error-prone. Moving to a digital system meant building a Windows-only application that multiple users could rely on at the same time, with data staying consistent for everyone. On top of that, the team wasn\'t used to entering data through an app, so the transition needed to feel as painless as possible.',
    solution: 'We built the app with WinForms to meet the requirement for a desktop-only application. The UI follows a minimalist design, keeping the interface clean and easy to navigate even for users new to digital data entry. All records are stored in an online database, so every user works with the same up-to-date data no matter which device they\'re on.',
    features: [
      'Multi-user support with data kept in sync across the team',
      'Notifications to keep users informed of important updates',
      'Customer data entry to keep client information organized',
      'Sales creation for quick and accurate transaction recording',
      '"Owner Care" module for handling customer complaints',
      'Correspondence management to keep communication in one place',
      'Transfer proof entry to support the sales processing workflow'
    ],
    tools: [
      { name: 'visual studio', src: '/images/tools/visual-studio.svg' },
      { name: '.net', src: '/images/tools/dotnet.svg' },
      { name: 'winforms', src: '/images/tools/winforms.png' },
      { name: 'sql server', src: '/images/tools/sql-server.svg' }
    ],
    gallery: [],
    devicePreviews: [
      { type: 'laptop', label: 'desktop screen', media: { kind: 'img', src: '/images/proj-tree/sp-img-prj-tree.webp' } }
    ],
    pageFile: 'tree-project'
  }
])

export const detailedProjects = projects.filter(p => p.pageFile)

export const partners = [
  { name: 'Leafy', icon: 'leaf' },
  { name: 'kanba', icon: 'circle' },
  { name: 'cloudly', icon: 'cloud' },
  { name: 'Lucid', icon: 'droplet' },
  { name: 'Sitemark', icon: 'diamond' }
]

export const aboutStats = [
  { icon: 'user', value: '30+', label: 'Projects Completed' },
  { icon: 'monitor', value: '10+', label: 'Happy Clients' },
  { icon: 'users', value: '8+', label: 'Years Experience' }
]

export const whyItems = [
  {
    icon: 'ci-web-design-01',
    title: 'Modern & Clean Design',
    desc: 'Interfaces that feel easy to use, simple to understand, and true to your brand.'
  },
  {
    icon: 'ci-laptop-performance',
    title: 'Performance Focused',
    desc: 'Websites and apps built to be fast, stable, and optimized for the best possible user experience.'
  },
  {
    icon: 'ci-security-check',
    title: 'Reliable & Transparent',
    desc: 'Clear communication, structured processes, and progress you can easily follow from start to finish.'
  },
  {
    icon: 'ci-headset',
    title: 'Ongoing Support',
    desc: 'We stay by your side after launch, keeping your product well-maintained and ready to grow.'
  }
]

