import React, { Component } from 'react'
import Title from "../components/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
    state = {
        services : [
            {
                icon: <FaCocktail />,
                title: "free cocktail",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit dolor magna eget est lorem ipsum. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Porttitor lacus luctus accumsan tortor. At tellus at urna condimentum mattis pellentesque id."
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit dolor magna eget est lorem ipsum. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Porttitor lacus luctus accumsan tortor. At tellus at urna condimentum mattis pellentesque id."
            },
            {
                icon: <FaShuttleVan />,
                title: "free Shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit dolor magna eget est lorem ipsum. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Porttitor lacus luctus accumsan tortor. At tellus at urna condimentum mattis pellentesque id."
            },
            {
                icon: <FaBeer />,
                title: "Strongest beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit dolor magna eget est lorem ipsum. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Porttitor lacus luctus accumsan tortor. At tellus at urna condimentum mattis pellentesque id."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"></Title>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6> {item.title} </h6>
                            <p> {item.info} </p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
