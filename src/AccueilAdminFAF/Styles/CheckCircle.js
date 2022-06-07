import '../../App.css';


function CheckCircle(props){
    return(
        <div style={{width:100+"%",justifyContent:"center",display:"flex",flexDirection:"column"}}>
    <label style={{fontWeight:"bold",marginBottom:30+"px",fontSize:24+"px"}}>{props.title}</label>
    <span class="material-icons md-130">check_circle</span>
    
</div>


    );
}
export default CheckCircle;