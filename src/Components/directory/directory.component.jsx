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
          linkUrl: 'adventure',
          imageUrl: 'https://animefanatika.co.za/afwp/wp-content/uploads/2018/06/samurai-champloo-anime-hd-wallpaper-1920x1080-37186.jpg'
        },
        {
          id: 2,
          title: 'Fantasy',
          linkUrl: '',
          imageUrl: 'https://usercontent2.hubstatic.com/14171949.jpg'
        },
        {
          id: 3,
          title: 'comedy',
          'linkUrl': '',
          imageUrl: 'https://cdn.hiptoro.com/wp-content/uploads/2020/03/One-Punch-Man-Season-3-Release-Date-Plot-Total-Episodes-Count-revealed-for-Third-Anime-Installment.jpg'
        },
        {
          id: 4,
          title: 'horror',
          size: 'large',
          'linkUrl': '',
          imageUrl: 'https://wallpaperset.com/w/full/c/0/b/339182.jpg'
        },
        {
          id: 5,
          title: 'motivational',
          size: 'large',
          'linkUrl': '',
          imageUrl: 'https://c4.wallpaperflare.com/wallpaper/562/947/830/ippo-boxing-fighting-spirit-hajime-no-ippo-wallpaper-preview.jpg'
        }
      ]
    }
  }

  render(){
    return(
    <div className="directory-menu"> 
    {
      this.state.sections.map(({id, ...otherSectionProps})=>{
        return (
          <MenuItem key={id} {...otherSectionProps} />
        )
      })
    }
    </div>
    )
  }
}

export default Directory;