// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'Unblocked games stuff',
  domain: '1bt.uk',
  subdomain: 'saltines', // desired subdomain name
  owner: {
    repo: '<https://github.com/ytrewq000/free-domains/>',
    email: '<winkelmanpayton000@gmail.com>',
  },
  record: {
    CNAME: selenite-rcj5.onrender.com',
  },
  //proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
