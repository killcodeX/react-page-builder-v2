import react from 'react';
import "./style.css"
import { Button, Switch } from 'antd';
import { useNavigate } from 'react-router-dom';

function Header({isDarkMode, setIsDarkMode}){
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
        navigate('/json-generator');
    }


    if(window.location.pathname == '/'){
        return (
            <header className='header'>
                <div className='header-left-side'>Page Builder</div>
                <div className='right-left-side'>
                    {/* <Switch value={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} /> */}
                    <Button type="primary" onClick={savePage}>Save</Button>
                    <Button type="primary" onClick={moveToPreview}>Preview</Button>
                </div>
            </header>
        )
    }else if(window.location.pathname == '/preview'){
        return (
            <header className='header'>
                <div className='header-left-side'>Page Builder</div>
                <div className='right-left-side'>
                    <Button type="primary" onClick={backToPage}>Page Builder</Button>
                   <Button type="primary" onClick={moveToGenerate}>Generate</Button>
                </div>
            </header>
        )
    }else{
        return (
            <header className='header'>
                <div className='header-left-side'>Page Builder</div>
                <div className='right-left-side'>
                    <Button type="primary" onClick={backToPage}>Page Builder</Button>
                </div>
            </header>
        )
    }
}

export default Header;