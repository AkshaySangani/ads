import React, { useEffect } from 'react';

const AdsComponent = (props) => {
    const { dataAdSlot } = props;



    useEffect(() => {

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }

        catch (e) {

        }

    }, []);



    return (
        <>
            <ins className="adsbygoogle"
                style={{ display: "block",width:"400px",height:"400px" }}
                data-ad-client="ca-pub-6597711809539661"
                data-ad-slot={dataAdSlot}
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        </>
    );
};

export default AdsComponent;
