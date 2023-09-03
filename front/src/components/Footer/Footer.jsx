import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

const navigation = {
    main: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Accessibility', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: <FaFacebook />,
        },
        {
            name: 'Instagram',
            href: '#',
            icon: <FaInstagram />,
        },
        {
            name: 'Twitter',
            href: '#',
            icon: <FaTwitter />,
        },
        {
            name: 'GitHub',
            href: '#',
            icon: <FaGithub />,
        },
        {
            name: 'YouTube',
            href: '#',
            icon: <FaYoutube />,
        },
    ],
};

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#333', color: '#fff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
                <nav style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} style={{ marginRight: '20px' }}>
                            <a href={item.href} style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    {navigation.social.map((item) => (
                        <a key={item.name} href={item.href} style={{ color: '#ccc', textDecoration: 'none', margin: '0 10px' }}>
                            {item.icon}
                            <span className="sr-only">{item.name}</span>
                        </a>
                    ))}
                </div>
                <p style={{ textAlign: 'center', fontSize: '12px' }}>&copy; 2023 Your Company, Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}