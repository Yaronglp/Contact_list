const Icon = ({classname, url, title}) =>
    <React.Fragment>
        {url ? <img className={classname}
                    src={url}
                    title={title ? title : null}
                    alt="picture"/> :
               <div className={classname}/>
        }
    </React.Fragment>;

export default Icon;