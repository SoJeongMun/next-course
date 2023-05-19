function LogisticsItem(props) {
  const { icon: Icon } = props

  return (
    <li className="flex text-2xl items-center flex-col text-center text-white md:items-start md:text-left">
      <span className="block">
        <Icon />
      </span>
      <span>{props.children}</span>
    </li>
  )
}

export default LogisticsItem
