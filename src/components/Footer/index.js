import React from 'react'
import {FaYoutube,FaGithub,FaLinkedin,FaInstagram,FaTwitter} from 'react-icons/fa'
import {FooterContainer,FooterWrapper,FooterLinksContainer,SocialIcons
    ,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIconLink} from './FooterElements'
function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    {/* <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle>
                                <FooterLink to=''></FooterLink>
                            </FooterLinksTitle>
                        </FooterLinksItems>
                    </FooterLinksWrapper> */}
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            NKUSI KEVIN
                        </SocialLogo>
                        <WebsiteRights>Nkusikevin © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.youtube.com/channel/UCKNsy73WkGHBUI6xHEjF5hA' target='_black' aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                             <SocialIconLink href='https://www.linkedin.com/in/nkusi-kevin' target='_black' aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                             <SocialIconLink href='https://github.com/nkusikevin' target='_black' aria-label="Github">
                                <FaGithub/>
                            </SocialIconLink>
                             <SocialIconLink href='https://www.instagram.com/real_nkevin/' target='_black' aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                             <SocialIconLink href='https://twitter.com/nkusikevin4' target='_black' aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
