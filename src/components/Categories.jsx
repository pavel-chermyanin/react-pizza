import React from "react";
import PropTypes from 'prop-types';


const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {

    return (
        <div>
            <div className="categories">
                <ul>
                    <li className={activeCategory === null ? 'active' : ''}
                        onClick={() => onClickCategory(null)}>
                        Все
                    </li>
                    {
                        items && items.map((name, index) => (
                            <li className={activeCategory === index ? 'active' : ''}
                                onClick={() => onClickCategory(index)}
                                key={`${name}_${index}`}>
                                {name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
})

Categories.propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func,
}

Categories.defaultProps = {
    activeCategory: null,
    items: [],
}



export default Categories
// class Categories extends React.Component {
//     state = {
//         activeItem: 3,
//     };

//     onSelectItem = index => {
//         this.setState({
//             activeItem: index
//         })
//     }

//     render() {
//         const { items, onClickItem } = this.props

//         return (
//             <div>
//                 <div className="categories">
//                     <ul>
//                         <li>Все</li>
//                         {
//                             items.map((name, index) => (
//                                 <li className={this.state.activeItem === index ? 'active' : ''}
//                                     onClick={() => this.onSelectItem(index)}
//                                     key={`${name}_${index}`}>{name}
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }
