import React from 'react';
import MenuItem  from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor(){
    super()
    this.state ={
      sections: [
        {
          id: 1,
          title: 'Adventure',
          imageUrl: 'https://cdn.hipwallpaper.com/m/56/3/o2iEmS.jpg'
        },
        {
          id: 2,
          title: 'Fantasy',
          imageUrl: 'https://cdn.hipwallpaper.com/i/83/67/ijRFLv.jpg'
        },
        {
          id: 3,
          title: 'comedy',
          imageUrl: 'https://c4.wallpaperflare.com/wallpaper/452/503/703/one-punch-man-saitama-genos-wallpaper-preview.jpg'
        },
        {
          id: 4,
          title: 'horror',
          size: 'large',
          imageUrl: 'https://c4.wallpaperflare.com/wallpaper/741/342/448/boku-no-hero-academia-midoriya-izuku-wallpaper-preview.jpg'
        },
        {
          id: 5,
          title: 'motivational',
          size: 'large',
          imageUrl: 'https://c4.wallpaperflare.com/wallpaper/497/838/394/anime-haikyu-wallpaper-preview.jpg'
        }
      ]
    }
  }

  render(){
    return(
    <div className="directory-menu"> 
    {
      this.state.sections.map(({id, title, imageUrl, size})=>{
        return (
          <MenuItem key={id}  title={title} imageUrl={imageUrl} size={size} />
        )
      })
    }
    </div>
    )
  }
}

export default Directory;