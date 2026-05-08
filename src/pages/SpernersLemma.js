import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import barycentric from "../images/barycentric_coord.PNG"

function SpernersLemma() {
    useEffect(() => {
        if (window.MathJax) {
            window.MathJax.typesetPromise();
        }
    }, []);
    return (
        <div>
        <header>
          <NavBar />
        </header>
        <main>
        <div className = 'container'>
            <div className = 'left-side'>
            <iframe src="/SpernersUnity/index.html" title="Sperner's Lemma Demo"/>
            </div>
            <div className = 'right-side'>
            <h2>Sperner's Lemma Intro:</h2>
                <p>
                    <ul> 
                        <li>In the window to the left, enter an integer into the field labeled "How Many Subdivisions?".</li>
                        <li>Then, press the button "Generate Sperner's Coloring"</li>
                        <li>Now, look for a triangle where each vertex is a different color.</li>
                    </ul>
                    <br/>
                    Repeat all the steps as many times as you like. There will always be a triangle where each vertex is a different color. How can I be sure? Sperner's Lemma!
                </p>
                <p>
                    Sperner's Lemma is a combinatorial lemma with an algorithmic proof. 
                    The conjecture begins with the definition of a simplex:
                    <br/>
                    An n-simplex is an n-dimensional tetrahedron, where n is an integer. A 0-simplex is a point, a 1-simplex a line, a 2-simplex a triangle, and a 3-simplex is a tetrahedron. 
                    <br/>
                    We can triangulate an n-simplex by dividing it into smaller n-simplices. The demo to the left demonstrates Sperner's Lemma on a 2-simplex. The 'faces' of this triangulation make up the boundary of the main triangle, and so are the bottom, right, and left edges. In the demo, the facets are the line segments that are along the boundary of the triangle. A 'facet' of a triangulated simplex is an (n-1)-simplex that lies on a face on the triangulation.
                    <br/>
                    We can color a triangulated n-simplex with n colors such that: 
                        <ul> 
                            <li> All main vertices of the simplex are colored uniquely</li> 
                            <li> All points on a facet of the simplex are colored by its main vertices</li>
                        </ul> 
                    Generate a Sperner's Coloring to see this. If a vertex lies in between two main vertices, then it is colored with one of their colors. The vertices that are inside the simplex are colored randomly. 
                    <br/>
                    Try to find a triangle in the interior of the main triangle that has a different color at each of its vertices! Sperner's Lemma proves that this triangle, which is referred to as a 'rainbow triangle' will always exist. In fact, it proves that there will always be an odd number of such triangles. Press 'Find Sperner's Triangles' and count how many are highlighted! 
                    <br/>
                    <b>More generally, Sperner's Lemma proves that a triangulated n-simplex colored according to the above guidelines will always contain an n-simplex that has a different color at each of its vertices.</b>
                </p>
                <h2>
                    Sperner's Lemma Proof for 2-dimensions:
                </h2>
                <p>
                    Given a triangulated 2-simplex, we call an line segment a 'door' if it has different colors for each of its end points. Press the 'Find Doors' buttons to highlight these. Along any edge of our triangle, we are guarenteed to have at least one door. This is because the main edge has different colored endpoints, and so there must be a line segment along this edge that 'switches' the color. In fact, there must be an odd number of doors along the edge. If the color was switched twice, when the vertices of the edge would have to have the same color, which we know is not true. 
                    <br/>
                    <br/>
                    Now, imagine that you are able to enter the simplex by 'walking' through these doors. Once you walk through a door, you are inside a triangle. Consider your options for the color of the third vertex of this triangle. If you have walked through a blue/green door, then if the third vertex of the triangle is blue or green, you have found another door to walk through. You can continue walking thrrough these doors. Eventually, you will either exit out the triangle through another blue/green door on the boundary, or you will walk into a rainbow triangle. If you exit out another blue/green door, then you have eliminated an even number of doors that might lead you to a rainbow triangle. Since you know that there are an odd number of blue/green doors along the boundary, there must be at least one door that leads you to a rainbow triangle!
                </p>
                <h2>Brouwer's Fixed Point Theorem</h2>
                <p> We can use Sperner's Lemma to prove Brower's Fixed Point Theorem in 2 dimensions. You might know this theorem from it's colloquial reference that, no matter how long you stir a cup of coffee, at least one molecule will never move.</p>
                <p> Before providing details on how Sperner's Lemma applies to Brouwer's Fixed Point Theorem, we must first describe what it means to consider the barycentric coordinates of the triangle. Imaging we take the triangle into a 3 dimensional space and 'lean it' up against the vertical axis so that its vertices lie on the points (1, 0, 0), (0, 1, 0), and (0, 0, 1). 
                <img src={barycentric} className = "center" width = "200"/>
                <br/>
                Notice that for all points on our triangle, \(x + y + z = 1\).
                <br/>
                <br/>
                Then, for a continuous function \(f: (x, y, z) \rightarrow (x', y', z')\) with our triangle as the domain, Brouwer's fixed point theorem states that there will always be a point at which \((x, y, z) = (x', y', z')\). 
                <br/>
                To prove this, we need to show that we will always be able to find such a point.
                <br/>
                How can we use Sperner's Lemma? By applying the coloring that we defined above. 
                <br/>
                First, subdivide the barycentric triangle. Then, consider the vertices of those subdivided triangles, \((x, y, z)\), and their relation to \((x', y', z')\) and color it as follows:
                <ul>
                    <li>If \(x \gt x'\), color the vertex magenta</li>
                    <li>If \(x \leq x'\) and \( y \gt y' \), color the vertex blue</li>
                    <li>If \(x \leq x'\) and \(y \leq y'\) and \(z \gt z'\), color the vertex green</li>
                </ul>
                Consider the vertices (1, 0, 0), (0, 1, 0), and (0, 0, 1). Unless any of these points are themselves fixed points(in which case we are done), they must be colored magenta, blue, and green respectively. 
                <br/>
                Then, along the bottom edge, z will always be 0, so the vertices of a subdivision must be colored magenta or blue. Similarly for the other edges. 
                Therefore, this generates a coloring that satisfies the conditions of Sperner's Lemma. So, there must be some rainbow triangle in the middle.
                <br/>
                Next, subdivide the triangle further, and color it again. You will find another rainbow triangle.
                <br/>
                We can continue subdividing and subdividing, and we can keep track of a raindbow triangle at each subdivision. 
                <br/>
                We subdivide the triangle further and further, until the area of the triangles in the subdivision approach 0. When we do this, consider only the magenta vertices. They form a sequence of points for \(x \gt x'\). We have an infinite sequence of points within a compact domain, so we can use Bolzano-Weirstrass's Theorem to conclude that there is a subset of these magenta points that converge. 
                <br/>
                Similarly, there is a sequence of blue points that converge, and a sequence of green points that converge. 
                <br/>
                Since the size of the triangles in our subdivision approach 0, the limits of all of these sequences must be the same, so they all must converge to a point \(P = (p_x, p_y, p_j)\). 
                <br/>
                Because we know that our function f is continuous, the fact that \(x \gt x'\) at each magenta point, and the magenta points converge to P, we can say that \(f(p_x) \leq p_x\). Similarly, \(f(p_y) \leq p_y\) and \(f(p_z) \leq p_z\). Since \(p_x + p_y + p_z = f(p_x) + f(p_y) + f(p_z) = 1\), we can conclude that \(f(p_x) = p_x, f(p_y) = p_y\), and \(f(p_z) = p_z\). Therefore, \(f(P) = P\), and we have found our fixed point!
                </p>
        </div>
        </div>
        </main>
        </div>
    );
}
export default SpernersLemma