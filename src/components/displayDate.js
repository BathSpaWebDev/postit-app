import Button from './button';

function DisplayDate(){
    const date = new Date();
    const day = date.getDay();

    return (
        <div className="date-container">
            Today is {
                day === 0 ? ' Monday' :
                day === 1 ? ' Tuesday' :
                day === 2 ? ' Wednesday' :
                day === 3 ? ' Thursday' :
                day === 4 ? ' Friday' :
                day === 5 ? ' Saturday' :
                ''
            }
            <Button rounded={true} buttonText="Click me" />
        </div>
    )
}
export default DisplayDate;