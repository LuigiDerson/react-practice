import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

import { UserProfile, Search } from './icons'

import navData from './data.json'

const HoverMenu = () => {
  const [hover, setHover] = useState(false)

  const [width, setWidth] = useState('100px')
  const [leftOffset, setLeftOffset] = useState('0')

  const handleOver = element => {
    setHover(true)
    const { width, left } = element.target.getBoundingClientRect()
    setWidth(`${Math.round(width).toString()}px`)
    setLeftOffset(`${Math.round(left).toString()}px`)
  }

  const handleLeave = () => {
    setHover(false)
  }

  const setNavStatus = element => {
    if (!element) return
    // console.log(element.offsetWidth)
  }

  useEffect(() => {
    console.log(width, leftOffset)
    return () => {}
  }, [width, leftOffset])

  return (
    <Header hover={hover}>
      <div>
        <Container>
          <nav>
            <NavList hover={hover}>
              {navData.map(({ href, page, id }) => (
                <li
                  key={id}
                  onMouseOver={handleOver}
                  onMouseLeave={handleLeave}
                  ref={setNavStatus}
                >
                  <a href={href}>{page}</a>
                  <NavMenu hover={hover}>
                    <h1>Test</h1>
                  </NavMenu>
                </li>
              ))}
              <li>
                <a href="/#">
                  <UserProfile />
                </a>
              </li>
              <li>
                <a href="/#">
                  <Search />
                </a>
              </li>
            </NavList>
            <NavStatus hover={hover} width={width} left={leftOffset} />
          </nav>
        </Container>
      </div>
    </Header>
  )
}

export default HoverMenu

const Header = styled.header`
  position: relative;
  background-color: transparent;
  vertical-align: baseline;
  transition: background-color 0.19s linear 0.2s;
  z-index: 1099;

  ${({ hover }) =>
    hover &&
    css`
      background-color: #fff;
      transition: background-color 0.19s linear;
    `}

  @media screen and (min-width: 730px) {
    height: 68px;
  }

  @media screen and (min-width: 960px) {
    height: 76px;
  }
`
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1480px) {
    width: 1384px;
    padding-right: 0;
    padding-left: 0;
  }
`

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  margin: 0;
  padding: 0;

  & > li {
    display: none;
    @media screen and (min-width: 960px) {
      display: block;
    }
  }

  & > li > a {
    color: ${({ hover }) => (hover ? '#000' : '#fff')};
    display: block;
    position: relative;
    transition: color 0.19s linear 0.2s;
    text-decoration: none;
    z-index: 1101;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 500;
    letter-spacing: 0;
    padding: 28px 16px;
    cursor: pointer;

    @media screen and (min-width: 960px) {
      font-size: 1.125rem;
      line-height: 1.25rem;
      letter-spacing: 0;
    }

    @media screen and (min-width: 1280px) {
      padding: 28px 16px;
    }
  }
`

const NavStatus = styled.span`
  height: 1px;
  position: absolute;
  left: 0;
  width: 100px;
  background: #000;
  opacity: ${({ hover }) => (hover ? '1' : '0')};
  transition: opacity 0.19s linear 0.2s, transform 0.25s linear;
  z-index: 1102;
  pointer-events: none;
  top: 75px;

  ${({ hover, width, left }) =>
    hover &&
    css`
      width: ${width};
      transform: translateX(${left});
    `}
`

const NavMenu = styled.div`
  top: 100%;
  right: 0;
  left: 0;
  height: 416px;
  padding-top: 40px;
  background: #fff;
  opacity: 0;
  overflow: hidden;
  z-index: 1100;
  position: absolute;
  width: 100%;
  transition: opacity 0.19s linear 0.2s, visibility 0ms 0.4s;
  visibility: hidden;

  &::before {
    position: absolute;
    width: 100%;
    transition: opacity 0.19s linear 0.2s, visibility 0ms 0.4s;
    visibility: hidden;
    display: block;
    top: -1px;
    height: 1px;
    background: #f3f3f3;
    content: '';
  }

  @media screen and (min-width: 960px) {
    ${({ hover }) =>
      hover &&
      css`
        max-width: 100vw;
        overflow: visible;
        transition: opacity 0.19s linear;
        opacity: 1;
        visibility: visible;

        &::before {
          transition: opacity 0.19s linear;
          opacity: 1;
          visibility: visible;
        }
      `}
  }
`
