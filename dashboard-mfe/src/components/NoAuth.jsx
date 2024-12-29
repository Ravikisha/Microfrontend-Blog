import React from 'react'

const NoAuth = () => {
    return (
        <div style={{ backgroundColor: '#1a202c', position: 'relative', overflow: 'hidden', height: '100vh' }}>
            <img
                src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
                alt="Banner"
                style={{ position: 'absolute', height: '100%', width: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'black', opacity: 0.25 }}></div>
            <div
                style={{
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    padding: '0 24px',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        fontFamily: 'monospace',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 10,
                    }}
                >
                    <h1
                        style={{
                            fontWeight: 800,
                            fontSize: '3rem',
                            color: 'white',
                            lineHeight: 1.2,
                            marginTop: '1rem',
                        }}
                    >
                        You need to be authenticated to add a blog
                    </h1>
                    <p
                        style={{
                            fontWeight: 800,
                            fontSize: '6rem',
                            color: 'white',
                            margin: '4rem 0',
                            animation: 'bounce 2s infinite',
                        }}
                    >
                        🚫
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NoAuth