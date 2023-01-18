import Layout from "../components/Layout";
import Link from "next/link";
import { skills } from "../skills";
import { experiences } from "../skills";
import { projects } from "../skills";

console.log(skills)
console.log(experiences)

const Index = () => (
    <Layout>
        {/** Header */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="img-fluid mx-auto d-block" src="foto.jpg" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h1>Estiven Cano</h1>
                            <h3>FullStack Developer</h3>
                            <p>
                                I am a junior fullstack developer with knowledge in Java,
                                Spring Boot, HTML, CSS and Nextjs. I am highly motivated to learn and take on new challenges,
                                as well as to develop innovative solutions. I am focused on improving my knowledge and
                                expanding my developer skills, though I still have no working experience.
                                I am committed to the job and I am ready to contribute to the team with my programming
                                skills. I hope to be able to apply my skills to contribute
                                to the development of cutting-edge solutions.
                            </p>
                            <a href="">Hire me</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/**Se3gúnda sección */}

        <div className="row py-2">
            <div className="col-md-4">
                <div className="card h-100 bg-ligth" >
                    <div className="card-body">
                        <h1>Skills</h1>

                        {
                            skills.map(({ skill, percentage }, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{ width: percentage }}></div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-ligth">
                    <div className="card-body">
                        <h1>Experience</h1>

                        <ul>
                            {
                                experiences.map(({ title, description, from, to }, i) => (
                                    <li key={i}>
                                        <h3>{title}</h3>
                                        <h5>{from}-{to}</h5>
                                        <p>{description}</p>
                                    </li>
                                ))
                            }
                        </ul>

                        <Link legacyBehavior href="/experiences">
                            <a className="btn btn-light">
                                Know More
                            </a>
                        </Link>
                    </div>

                </div>
            </div>

            <div className="row py-2">
                <div className="col-md-12">
                    <div className="card card-body bg-dark">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center text-light">Portfolio</h1>
                            </div>
                                {
                                    projects.map(({ name, description, image }, i) => (
                                        <div className="col-md-4 p-2" key={i}>
                                            <div className="card h-100">
                                                <div className="overflow">
                                                    <img src={image} alt="" className="card-img-top" />
                                                </div>
                                                <div className="card-body">
                                                    <h3>{name}</h3>
                                                    <p>{description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            <div className="text-center mt-4">
                                <Link legacyBehavior href="/portfolio">
                                    <a className="btn btn-outline-light">More Porjects</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </Layout >

)

export default Index; 