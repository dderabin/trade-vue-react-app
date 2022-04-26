import { useEffect, useState } from "react"

const SelectCountry = ({list, onSelected}) => {
  const [datas, setDatas] = useState([])
  const [selected, setSelected] = useState({src: '', name: ''})
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setDatas(list)
  }, [list])

  const handleChange = (e) => {
    setDatas(datas => list.filter(item => item.name.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1))
  }

  const handleSelect = (index) => {
    onSelected(datas[index].isoCode, datas[index].name)
    setSelected({
      src: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/'+datas[index].isoCode+'.svg',
      name: datas[index].name
    })
    setVisible(false)
  }

  useEffect(() => {
    setDatas(list)
  }, [visible])

  return (
    <div className="select-country">
      <div 
        onClick={() => setVisible(visible => visible = !visible)}
        className="selected"
      >
        {selected.src? (
            <span>
              <img src={selected.src} alt={selected.name} style={{width:'20px'}} />
              &nbsp;{selected.name}
            </span>
          ):(
            <span style={{color: 'lightgrey', fontWeight: '300'}}>Select Country of Residence</span>
          )
        }
      </div>
        <i className="bi bi-chevron-down"></i>
      { visible && 
        <div className="select-body">
          <input 
            type="text" 
            onChange={handleChange}
          />
          <div className="select-list">
            <ul>
              {datas && datas.map((item, index) => {
                let img_url = 'http://purecatamphetamine.github.io/country-flag-icons/3x2/' + item.isoCode + '.svg'
                return (
                  <li 
                    key={index}
                    onClick={() =>handleSelect(index)}
                  >
                    <img alt={item.isoCode}
                      src={img_url}
                    />
                    <span>{item.name}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      }
    </div>
  )
}

export default SelectCountry