---
sidebar_position: 1
---

# Introduction to Our Decentralized Database Engine

Welcome to the documentation for our cutting-edge project, a decentralized database engine designed to empower users with full control over their data. This project represents a significant leap forward in the way databases are traditionally conceived and operated. Our aim is to provide a robust, scalable solution that prioritizes user sovereignty and data security, leveraging the latest in decentralized technologies and access control methodologies.

## Project Overview

Our project is built on a dual-component architecture that seamlessly integrates a middle layer written in C# with a sophisticated database technology stack. This unique structure enables a dynamic, efficient bridge between the user interface and the underlying data storage/retrieval mechanisms.

### Middle Layer (C#)

The middle layer serves as the heart of our communication strategy, acting as a pass-through connection between the frontend and the backend. It is designed to handle queries and hashes with high efficiency, ensuring that requests are processed and dispatched to the backend with precision. This component is critical for maintaining the fluidity and responsiveness of our system, providing a reliable conduit for data exchange.

### Database Technology and Setup

At the core of our project is the advanced database technology setup, encompassing a range of powerful tools and platforms such as Spark, Hive, and IPFS nodes. This setup is the backbone of our decentralized engine, facilitating the storage, retrieval, and management of data in a way that is both innovative and user-centric.

Our system utilizes Docker Compose for orchestration, along with a suite of configuration files, to streamline the deployment and operation of our database nodes. The architecture is designed to dynamically create or modify data storage mechanisms based on the type of query received. This means that there is never a static database running; instead, databases are created and destroyed on-demand, ensuring optimal resource utilization and enhanced security.

### Decentralization and User Data Ownership

A cornerstone of our philosophy is the decentralization of data storage and management. Unlike traditional databases, our engine does not maintain a constant database instance. Queries that modify data result in the creation of a new hash, reflecting changes and preserving the integrity of the data history. This approach not only minimizes storage requirements but also reinforces the user's control over their data.

### Future Directions: Zero Trust Access Control

As we advance, our focus will shift towards integrating a decentralized, zero-trust access control policy into our network. This research aims to establish a secure, reliable framework for data access that does not rely on centralized authority, further enhancing the privacy and security of user data.

## Getting Started

To dive deeper into our project and explore its capabilities, please refer to the following sections of our documentation:

- [Middle Layer Architecture](./middle-layer-architecture.md): An in-depth look at our C# middle layer, its design, and its role in our system.
- [Database Technology Setup](./database-technology-setup.md): Detailed documentation on our database technologies, setup procedures, and operational guidelines.
- [Decentralization and Data Ownership](./decentralization-and-data-ownership.md): Insights into how our project champions user data sovereignty and the technical mechanisms that support it.
- [Research and Development](./research-and-development.md): Ongoing efforts and future plans for enhancing our decentralized database engine, including zero-trust access control policies.

Thank you for your interest in our project. We are excited to embark on this journey together, pushing the boundaries of database technology and data sovereignty.
