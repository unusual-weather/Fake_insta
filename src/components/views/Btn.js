const Btn = (props) => {
    const onSubmitHandler=(event)=>{
        event.preventDefault();

        console.log('Id',document.getElementsByClassName('ID')[0].getElementsByTagName('input')[0].value)
        console.log('Password',document.getElementsByClassName('Passwd')[0].getElementsByTagName('input')[0].value)

        /*입력하였을 때 서버로 보내는 코드 작성하면 될듯...? _action 이용 */
        
    }
    return (
        <div className="LoginBtn">
            <button onClick={onSubmitHandler}>
                <div>{props.value}</div>
            </button>
        </div>
    )
}

export default Btn;