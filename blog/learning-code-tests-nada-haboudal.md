---
title: 'Learning and Implementing Code Tests'
authors:
  - 'Nada-Haboudal'
date: '2024-01-18'
categories:
  - 'Engineering'
heroImage: 'https://i.imgur.com/RTykJ1Q.jpg'
subtitle: "An Intern's Perspective"
tags:
  - 'pytest'
---

Welcome to my blog post, where I showcase my work with pytest, a super handy tool for testing Python code.

## Introduction

As part of my internship with the AI-READI project, I am working with the team developing FAIRhub, a platform aimed at simplifying the management, preparation, and sharing of datasets that are ready for downstream AI-based analysis. A major part of making data AI-ready is to make it compliant with the FAIR (Findable, Accessible, Interoperable, Reusable) Principles, which are a set of high-level instructions for making data optimally reusable by humans and machines including AI models. This consists for instance of structuring the data according to a strict folder structure, using accessible file formats, including rich metadata with controlled vocabulary, etc. This can be difficult and time consuming to do manually, so the FAIRhub team is developing a Python package called pyfairdatatool that will help automate the process of making data FAIR on the FAIRhub platform. My work within the team consists of developing code tests for pyfairdatatools, to ensure that for a given input, functions in pyfairdatatools are providing the expected output. I used a Python tool called pytest to achieve that. I explain below in more detail what pyfairdatatools is and how I used pytest to develop code tests for it.

## Overview

The pyfairdatatools package consists of a collection of helpful functions for extracting, transforming raw data, generating relevant metadata files and validating the data and metadata files against the FAIR guidelines adopted by the AI-READI project.

## Elements

pyfairdatatools has many elements but the elements we are going to focus on here are the schema, validation code, and testing code.

1. **The schema** is like a blueprint for data; it outlines the structure, type, and format of the data expected in a JSON file. For example, the `participants.schema.json` in the pyfairdatatols project specifies the rules for what information should be included about participants in a study and how that information should be formatted
2. **The validation** code is a set of rules or functions that check if the actual data matches the blueprint described by the schema. It ensures that the data you have meets the expected standards and guidelines before you proceed with using it in your project.
3. **Testing the validation code** involves writing tests that confirm whether the validation code works correctly. It typically involves passing in known data to the validate functions and checking to make sure they return the correct result (true if the data meets the schema, false otherwise).

### To explain the elements using real-world analogies

1. **The schema:** Think of a schema as your grocery shopping list. It's got specifics like what you need to buy and how much.

2. **The validation:** This is like checking your cart against the list before you check out. Our `validate.py` is the diligent checker here.

3. **Testing the validation code:** Testing with pytest is like doing a mock shopping run to make sure you don’t forget anything when it’s game time.

## Learning pytest

I picked up pytest by checking out a few key resources ( listed below), which really helped me understand the general idea of code testing and how pytest works. I also got a lot of help from ChatGPT to go through the code line by line, and that really sped up my learning. Once I got a feel for the different styles of writing test code, it became a lot easier to understand previous code done by my peers and improve on it.

## Implementing Tests

My job was to make sure our pyfairdatatools package was bug-free and working smoothly by writing tests to confirm the effectiveness of the validation code. I implemented the following steps to achieve our goal.

1. **Understanding the Schema:** Understanding how our data should be structured.
   For example: figuring out which parts were essential and which were optional.

2. **Building the Test Checklist:** I harnessed Excel to create a detailed checklist, documenting each aspect of the schema we needed to test.

3. **Crafting Test Scenarios:** Developed a range of test scenarios using pytest, guided by our checklist to ensure no error slipped through.

4. **Optimising the Code:** Aimed to make our code more efficient by consolidating tests from various functions and keeping the comments clear and concise.

Through my process, I have successfully increased test coverage for our code from 30% to 80%. This means the test covers 80% of the code lines increasing the reliability of the code to function as intended.

## Conclusion

Diving into pytest has been an insightful experience. It's way more than just a testing tool. It's like a roadmap for our code, making sure everything runs smoothly and as expected, which is important when handling a large volume of data and collaborating with various software developers. I believe this will be very valuable for me as I anticipate developing AI/ML models in the future using Python, and I can foresee using pytest to build code tests.

## References

- FAIR Data Principles: <https://www.go-fair.org/fair-principles/>
- Nature Article on FAIR Data: <https://www.nature.com/articles/sdata201618>
- pyfairdatatools: <https://github.com/AI-READI/pyfairdatatools>
