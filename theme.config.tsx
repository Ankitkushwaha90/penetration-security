import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
// export default {
//   docsRepositoryBase: 'https://github.com/shuding/nextra/tree/main/docs'
// }
// export default {
//   project: {
//     link: 'https://github.com/shuding/nextra'
//   },
//   logo: <b>Project</b>
// }

const config: DocsThemeConfig = {
  // logo: ,<span>penetration-security</span>
  // title: "Your Title Here", // Add the title here

  // titleImage: (
  //   <img
  //     src={"https://raw.githubusercontent.com/Ankitkushwaha90/AnkitKushwaha/main/icon.png"}
  //     width={100} // Adjust the width as needed
  //     alt="Title Image Alt Text"
  //   />
  // ),
  
  logo: (<span><img src={"https://raw.githubusercontent.com/Ankitkushwaha90/AnkitKushwaha/main/icon.png"} width={50} alt="penetration-security" />penetration-security</span>), // Use the imported image as the logo
  
    // <div style={{ display: 'flex', alignItems: 'center' }}>
    // <img src={"https://raw.githubusercontent.com/Ankitkushwaha90/AnkitKushwaha/main/icon.png"} width={100} alt="penetration-security" />
    //   <span style={{ fontWeight: 'bold' }}>penetration-security</span>
    // </div>
  
  project: {
    link: 'https://github.com/ankitkushwaha90',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/ankitkushwaha90',
  footer: {
    text: 'penetration-security',
  },
}

export default config
