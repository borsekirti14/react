<div className="center" style={{height:"9em",position: "relative",border:centerBorder+"px solid black"}}>
                <div className="column">                    
                    {/* <table> */}
                        {/* <tbody>
                            {
                                data.map((item) => (   
                                    <div className="circle">
                                        {dataLength < 2 ? ( 
                                        <tr>
                                            <td><span >1</span></td>                                          
                                        </tr>                                    
                                    ) : (
                                        <tr>
                                            <td><span>{item.id}</span></td>
                                        </tr>
                                    )}
                                    </div>
                                ))                           
                            }  
                        </tbody> */}
                          
                            {/* <tr>
                                <td><span className="circle">1</span></td>
                                <td><span className="circle">2</span></td>
                            </tr> */}
                                             
                    {/* </table> */}
                    {/* {boardSize} */}
                    {console.log("supportedModule: "+supportedModule)}
                    {console.log("boardSize: "+boardSize)}
                    {boardSize === 2 ?(
                        <>  
                        <Image src={image} preview={false}></Image>
                            <div className="float-child"></div>
                            <div className="float-child"></div>
                        </>
                    ):(
                        <div>
                            {console.log("inside else")}
                        </div>
                    )}
                    

                </div>           
        </div>