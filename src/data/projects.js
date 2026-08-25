
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
    description: 'Hamilku Admin is the control center for the Hamilku patient and healthcare-provider apps. It helps admins monitor transactions, bookings, registered patients and providers, provider verification documents such as STR and SIP, class registrations, vouchers, and content across articles, forums, and media. The system keeps data synchronized across the Hamilku ecosystem so operations stay clear and manageable.',
    shortDesc: 'An admin dashboard for managing Hamilku transactions, provider verification, users, bookings, vouchers, classes, and content across the app ecosystem.',
    previewImg: '/images/proj-hmlad/sp-img-prj-hmlad-01.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-hmlad/sp-img-prj-hmlad-01.webp' } }
    ],
    challenge: 'Hamilku Admin needed to give the internal team full control over transactions and content from both the patient app and the healthcare-provider app. Admins had to view all registered patients and providers, review provider registration data with STR and SIP documents, and keep data integrated and synchronized across the Hamilku ecosystem. The platform also had to support operational tasks such as class registration, booking management, voucher generation, and content moderation.',
    solution: 'We built a centralized admin dashboard that brings user data, provider verification, transactions, bookings, classes, vouchers, and content management into one workflow. Data from the patient and provider apps is synchronized into the admin system, giving the team a clearer view of daily operations. The interface is structured to help admins review submissions, manage orders, publish content, and monitor activity without jumping between separate tools.',
    features: [
      'Healthcare-provider registration verification',
      'Patient and healthcare-provider data viewer',
      'Pregnancy class and Upgrade Class registration management',
      'Face-to-face service booking order control',
      'Discount voucher generation for bookings',
      'Article content management',
      'Forum moderation and management',
      'Media content management'
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
    description: 'Hamilku Nakes is the healthcare-provider version of Hamilku, built for obstetricians, general practitioners, and midwives who serve patients booked through the patient app. It keeps examination data aligned between providers and patients, supports pregnancy records, screening, scoring, ultrasound photos, next-visit schedules, practice hours, certified webinars, articles, forum replies, and QR-based data transfer.',
    shortDesc: 'A provider-focused Hamilku app for managing patient bookings, pregnancy examinations, screening, practice schedules, forums, and QR-based data transfer.',
    previewImg: '/images/proj-hmlnk/sp-img-prj-hmlnk-01.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-hmlnk/sp-img-prj-hmlnk-01.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-hmlnk/sp-img-prj-hmlnk-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-hmlnk/sp-img-prj-hmlnk-head-hp.webp' } }
    ],
    challenge: 'Hamilku Nakes had to support obstetricians, general practitioners, and midwives who serve patients booking through Hamilku. The main challenge was keeping data synchronized and consistent between what providers enter and what patients receive. Providers also needed a complete workflow for entering examination data, pregnancy records, screening and scoring results, ultrasound photos, next control dates, and practice schedules that can be shown to patients.',
    solution: 'We aligned the input parameters needed by both patients and healthcare providers so shared data stays consistent across the ecosystem. Ultrasound photos are compressed and stored with blob storage to keep images lightweight when loaded in the app. We also built practice schedule management for providers, along with QR-based examination data transfer so patients can receive their results quickly and reliably.',
    features: [
      'Login, account registration, and password reset',
      'STR and SIP input during registration for provider verification by Hamilku admins',
      'Patient data input and pregnancy record management',
      'Screening and scoring input for patient examinations',
      'Ultrasound photo upload with optimized image handling',
      'Practice schedule management for patient-facing availability',
      'Certified Upgrade Class webinars for healthcare providers',
      'Articles and educational content',
      'Forum access for answering pregnancy-related questions',
      'QR code transfer for sending examination data to patients'
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
    description: 'Hamilku is a patient-focused upgrade of Sayang Bunda, built for pregnant women and women planning a pregnancy. The app helps users track pregnancy data, calculate estimated due dates and gestational age from the last menstrual period, complete self-screening, and receive risk scores based on obstetric criteria and the Poedji Rochyati scoring table.',
    shortDesc: 'A patient-focused pregnancy app for tracking gestational age, estimated due dates, self-screening, health content, bookings, and community support.',
    previewImg: '/images/proj-hml/sp-img-prj-hml-01.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-hml/sp-img-prj-hml-01.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-hml/sp-img-prj-hml-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-hml/sp-img-prj-hml-head-hp.webp' } }
    ],
    challenge: 'Hamilku was developed as an upgrade from Sayang Bunda, shifting the focus from doctors to patients: pregnant women and women preparing for pregnancy. The app needed to calculate estimated due dates and gestational age automatically from pregnancy data, while also helping users complete screening tables and receive risk scores based on the conditions they experience. The information had to stay clear, practical, and easy to use for non-medical users.',
    solution: 'We built automatic calculations for estimated delivery dates and gestational age based on the patient\'s last menstrual period. Screening tables were created from standard obstetrician references, while risk scoring follows the Poedji Rochyati scoring table. The app also supports independent screening, pregnancy records, educational media, service booking, and QR-based examination data transfer from obstetric specialists.',
    features: [
      'Login, account registration, and password reset',
      'Independent pregnancy screening for patients',
      'Gynecology diary for personal health notes',
      'Pregnancy classes and webinar access',
      'Face-to-face service booking',
      'Pregnancy data input and tracking',
      'QR code transfer for examination data from obstetric specialists',
      'Articles and educational content',
      'Hamilku Media with pregnancy health videos',
      'Pregnancy forum for community discussion'
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
    description: 'Property Share Unit is a static landing page for Triyana Group, presenting a Bali resort property investment offer through a share-unit model. The page keeps product details easy to scan, highlights the entry point of investing from around 300 thousand rupiah, and makes contact options clear so potential investors can quickly reach the team through WhatsApp, phone, or email.',
    shortDesc: 'A responsive landing page for Triyana Group that presents Bali resort property investment details and makes investor contact options easy to find.',
    previewImg: '/images/proj-propsu/sp-img-prj-propsu.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-propsu/sp-img-prj-propsu.webp' } }
    ],
    challenge: 'Triyana Group needed a landing page that could present information about Bali resort property investment through a share-unit system. The content had to explain the product clearly while making the most important details easy for potential investors to notice. Product information and contact options needed strong visual priority, so visitors could quickly understand the offer and take the next step without searching around the page.',
    solution: 'We built a focused static landing page that puts the core investment information front and center. The offer "investment starts from around 300 thousand rupiah" is highlighted clearly, supported by a prominent contact button that encourages visitors to reach out. The page is also designed responsively, keeping product details and contact access clear across desktop and mobile screens.',
    features: [
      'Static landing page with clear investment product information',
      'Highlighted investment entry point starting from around 300 thousand rupiah',
      'Contact access through WhatsApp, phone, and email',
      'Responsive design for desktop and mobile browsing'
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
    description: 'Revolution Property Admin is the main back-office app for a Bali resort and property investment company. It manages online data for customers, products, assets, sales, payments, promotions, dividends, cooperative records, and reports. Since the sales scheme changes often, the app is built to stay flexible, integrate with companion apps, and keep growing without breaking existing workflows.',
    shortDesc: 'A flexible admin app for managing resort and property investment operations, from master data and sales to reporting and companion app integrations.',
    previewImg: '/images/proj-rvadm/sp-img-prj-rvadm-head-laptop.webp',
    headerDevices: [
      { type: 'laptop', media: { kind: 'img', src: '/images/proj-rvadm/sp-img-prj-rvadm-head-laptop.webp' } },
      { type: 'tablet', media: { kind: 'img', src: '/images/proj-rvadm/sp-img-prj-rvadm-head-tablet.webp' } },
      { type: 'hp', media: { kind: 'img', src: '/images/proj-rvadm/sp-img-prj-rvadm-head-hp.webp' } }
    ],
    challenge: 'The app is used by admins at a Bali-based resort and property investment company, with all operational data stored in an online database. It acts as the main system and connects with several companion applications. The biggest challenge is the sales scheme, which changes often and usually affects the core application flow. Because the platform is still actively evolving, every new feature needs to be added carefully without disrupting existing features that the team already depends on.',
    solution: 'We designed the application to be flexible instead of locking it into a rigid sales flow. The interface and feature structure can keep adapting as the business process grows, while existing workflows remain stable. Accurate data calculations are handled inside the system and presented through dashboards, helping admins monitor sales, assets, payments, and key business activity more easily.',
    features: [
      'Master data management for customers, products, assets, and related records',
      'Sales management for cash and installment transactions',
      'Resort asset management for tracking property-related operations',
      'Promotion management to support changing sales schemes',
      'Asset letter management for organizing important documents',
      'E-wallet, dividend, and cooperative management',
      'Reports and dashboards for monitoring key business data'
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
    description: 'An obstetric care app that helps doctors track pregnancy progress in one connected system. It stores patient records in an online database, calculates estimated due dates and gestational age from the last menstrual period, generates screening tables based on standard obstetric guidelines, and computes risk scores with the Poedji Rochyati scoring system. It also supports referrals, obstetrician records, pregnancy logs, and health information for expectant mothers.',
    shortDesc: 'An obstetric care app that automates due date calculations, pregnancy screening, and risk scoring while keeping patient records online.',
    previewImg: '/images/proj-sayang/sp-img-prj-sbun-01.webp',
    challenge: 'Obstetricians needed a focused application to track pregnancy progress, replacing scattered notes and manual checks with a centralized digital system. It had to store patient data online, calculate estimated due dates and gestational age automatically, generate screening tables, and produce risk scores from established criteria. The system also needed to work through a browser so doctors could review and update records from any device.',
    solution: 'We built the application with Blazor and a responsive interface for desktops, tablets, and smartphones. Estimated due dates and gestational age are calculated from the patient\'s last menstrual period, while screening tables and Poedji Rochyati risk scores are generated automatically. All records are stored in an online database, keeping patient information consistent and accessible across the team.',
    features: [
      'Patient data input for complete record keeping',
      'Pregnancy screening and scoring with automated calculations',
      'Hospital referral feature for escalations and follow-ups',
      'Obstetrician data input to manage provider information',
      'Pregnancy data logging for tracking progress over time',
      'Health information for expectant mothers'
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
    type: 'web app',
    coreTech: 'blazor',
    year: '2021',
    description: 'A sales management app for a flooring service company, built to replace manual bookkeeping with a digital workflow. It centralizes supplier data, inventory, sales, and financial tracking in one browser-based platform. Built with Blazor and backed by an online database, the app keeps records consistent and easy for the team to access. Its responsive interface works across desktops, tablets, and smartphones, giving staff more flexibility in daily operations.',
    shortDesc: 'A web app that replaces manual bookkeeping with a responsive system for managing suppliers, stock, sales, and financial records.',
    previewImg: '/images/proj-imi/sp-img-prj-imi-02.webp',
    challenge: 'The company relied on manual bookkeeping to manage sales, which made the process slow, hard to scale, and prone to inconsistencies. Moving to a digital system meant building a web app that could handle suppliers, inventory, sales, and financial tracking in one place. It also needed to be accessible from any device, so the team could work from the office or on the go without depending on a single workstation.',
    solution: 'We built the application with Blazor, creating a responsive interface that works comfortably across smartphones, tablets, and desktops. All data is stored in an online database, keeping records consistent and available to every user. The design focuses on clarity and ease of use, making the shift from manual bookkeeping to a digital workflow smoother for the team.',
    features: [
      'Multi-user support with synchronized access across the team',
      'Supplier data entry to keep vendor information organized',
      'Master item and stock management for accurate inventory tracking',
      'Sales processing for quick and reliable transaction recording',
      'Tracking of supplier payables and receivables for financial clarity',
      'Data export to Excel for easy reporting and analysis'
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
    description: 'Tree Admin had served the business well as a desktop app, but the team needed a more flexible web-based version. We transformed the legacy system into a responsive platform while preserving its essential features, including multi-user access, notifications, customer data, sales, filtering, and Excel export. By reusing the existing database, all records stayed intact, allowing the team to continue daily operations without interruption.',
    shortDesc: 'A web app upgrade of Tree Admin that brings legacy features to the browser with a responsive interface and preserved existing data.',
    previewImg: '/images/proj-tav/sp-img-prj-tav-03.webp',
    challenge: 'Tree Admin had served the business well as a desktop application, but the team needed something more flexible. The task was to upgrade it into a web-based platform, adapting every core function from the legacy system to a different framework. The new version also had to be accessible from any device through a browser, so staff could work comfortably wherever they were.',
    solution: 'We rebuilt the legacy application as a responsive web app while keeping the existing workflow familiar. The interface adapts comfortably to smartphones, tablets, and desktops, and the system continues using the legacy database so existing records carry over cleanly. This helped the team move to the new platform without interrupting daily data entry.',
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
    description: 'For years, sales were recorded manually, making the process time-consuming, error-prone, and difficult to keep consistent. We digitized the workflow into a Windows-only multi-user app that keeps data synchronized across the team. Built with WinForms, the app uses a minimalist interface and stores customer details, sales, correspondence, transfer proofs, and complaints in an online database. It turns paperwork into a simpler, more reliable daily workflow.',
    shortDesc: 'A Windows app that replaces manual sales recording with a simple digital workflow for customer data, sales, correspondence, and complaints.',
    previewImg: '/images/proj-tree/sp-img-prj-tree.webp',
    challenge: 'The business had long relied on manual sales recording, which made tracking transactions slow and error-prone. Moving to a digital system meant building a Windows-only application that multiple users could use at the same time while keeping data consistent for everyone. The team was also new to app-based data entry, so the transition needed to feel simple and approachable.',
    solution: 'We built the app with WinForms to meet the requirement for a desktop-only application. The UI uses a minimalist design, keeping the interface clean and easy to navigate even for users new to digital data entry. All records are stored in an online database, so every user works with the same up-to-date data from their own device.',
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

