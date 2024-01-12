import react from 'react';
import "./style.css"
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();
    const savePage = () =>{
        console.log('savePage')
    }
    const moveToPreview = () =>{
        navigate('/preview');
    }
    const backToPage = () =>{
        navigate('/');
    }
    const moveToGenerate = () =>{
        console.log('moveToGenerate')
        navigate('/json-generator');
    }


    if(window.location.pathname == '/'){
        return (
            <header className='header'>
                <div className='header-left-side'>Page Builder</div>
                <div className='right-left-side'>
                    <Button variant="outlined" onClick={savePage}>Save</Button>
                    <Button variant="contained" onClick={moveToPreview}>Preview</Button>
                </div>
            </header>
        )
    }else if(window.location.pathname == '/preview'){
        return (
            <header className='header'>
                <div className='header-left-side'>Page Builder</div>
                <div className='right-left-side'>
                    <Button variant="outlined" onClick={backToPage}>Page Builder</Button>
                   <Button variant="contained" onClick={moveToGenerate}>Generate</Button>
                </div>
            </header>
        )
    }else{
        return (
            <header className='header'>
                <div className='header-left-side'>Page Builder</div>
                <div className='right-left-side'>
                    <Button variant="contained" onClick={backToPage}>Page Builder</Button>
                </div>
            </header>
        )
    }
}

export default Header;