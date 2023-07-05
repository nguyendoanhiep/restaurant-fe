import {Input, Menu} from 'antd'

const {Search} = Input;
import '../../App.css'

const SearchComponent = () => {

    function getItem(label, key, icon, children, style) {
        return {
            key,
            icon,
            children,
            label,
            style,
        };
    }

    const itemsOnMobile = [
        getItem('Đồ ăn cho mèo', '2', null, [
                getItem('Hạt cho mèo', '3'),
                getItem('Pate gói', '4'),
                getItem('Pate tươi', '11'),
                getItem('Súp thưởng', '5')
            ]
        ),
        getItem('Cát mèo', '6', null, [
                getItem('Cát đất sét', '7',),
                getItem('Cát đậu nành', '8',)
            ]
        ),
        getItem('Đồ chơi ', '9',),
        getItem('Phụ kiện', '10',)

    ]

    const items = [
        getItem('Danh sách sản phẩm', '1', null, [
            getItem('Đồ ăn cho mèo', '2', null, [
                    getItem('Hạt cho mèo', '3'),
                    getItem('Pate gói', '4'),
                    getItem('Pate tươi', '11'),
                    getItem('Súp thưởng', '5')
                ]
            ),
            getItem('Cát mèo', '6', null, [
                    getItem('Cát đất sét', '7',),
                    getItem('Cát đậu nành', '8',)
                ]
            ),
            getItem('Đồ chơi ', '9',),
            getItem('Phụ kiện', '10',)

        ])
    ]

    const onSearch = () => {
    };
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <div className="component-search">
            <div className="input-search">
                <Search placeholder="Search" onSearch={onSearch}/>
            </div>
            <div className="category-product-web">
                <Menu
                    onClick={onClick}
                    defaultSelectedKeys={['1']}
                    style={{
                        width: '100%',
                        marginTop: '20px',
                    }}
                    mode="inline"
                    items={items}
                />
            </div>
            <div className="category-product-mobile">
                <Menu
                    style={{
                        width: '150%',
                        marginBottom: '10px',
                    }}
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={itemsOnMobile}
                />
            </div>
        </div>
    )
}
export default SearchComponent;