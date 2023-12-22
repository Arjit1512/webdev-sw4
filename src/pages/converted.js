function useState(initialValue) {
    let state = initialValue;

    function setState(newState) {
        state = newState;
        render();
    }

    return [state, setState];
}

// Simulating React useEffect hook
function useEffect(callback, dependencies) {
    // For simplicity, we call the callback whenever it's used
    callback();
}

// Simulating React component Start
function Start() {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isSignUp, setSignUp] = useState(true);

    const handleCreateAccountClick = () => {
        console.log("Create account clicked");
        setSignUp(true);
        setPopupVisible(true);
    };

    const handlePopupClose = () => {
        setPopupVisible(false);
    };

    const handleSubmit = (event) => {
        // Simulating route navigation
        event.preventDefault();
        // Handle form submission logic for Leave Group
        console.log('Leave Group Logic');

        // Redirect to the "index.html" file
        window.location.href = 'index.html';
    };

    // Function to render the component
    function render() {
        const root = document.getElementById("root");
        root.innerHTML = "";

        // HTML structure
        const html = `
        <section id='navbar'>
        <div class='navbar'>
            <a class='navbar-brand'><span>ATG</span>.WORLD</a>
            <div class='navbar-search'>
                <input type='text' value='  Search for your favorite groups in ATG' name='search'></input>
            </div>

            <div class='feed feed1'>
                <img class='dp111' src="./unga1.jpeg" alt="Profile Image">
                <div class='ungah4'>
                    <h4 class='username'><nobr>Siddharth Goyal</nobr></h4>
                </div>
            </div>
            <!-- You'll need to include the Popup HTML here if it's not a separate file -->
        </div>
    </section>

    <div class='brder'></div>

    <section id='posts'>
        <div class='posts-div'>
            <ul id="navbar-posts">
                <li><a class='active'><nobr>All Posts(32)</nobr></a></li>
                <li><a>Article</a></li>
                <li><a>Event</a></li>
                <li><a>Education</a></li>
                <li><a>Job</a></li>
            </ul>
        </div>

        <div class='posts2-div'>
            <ul id="navbar-posts2">
                <button class='b1 b11'><nobr>Write a Post</nobr></button>
                <button class='b2 b12'onClick="handleSubmit()" id='leaveGroupBtn'><nobr>Leave Group</nobr></button>
   
            </ul>
        </div>
    </section>

    <section id='last'>
    <!-- Feed 1 -->
    <div class='feed'>
        <img src="./pic1.jpeg" alt="Article Image">
        <h4>Article</h4>
        <div class='flex-btw'>
            <h3>What if famous brands had regular fonts? Meet RegulaBrands!</h3>
        </div>
        <p>I've worked in UX for the better part of a decade. From now on, I plan to rei..</p>
        <img class='dp' src="./dp1.jpeg" alt="Author's Profile Image">
        <h4 class='username'>Sarthak Kamra</h4>
        <div class='flex-btw'>
            <p class='views'>1.4k views</p>
        </div>
    
        <div class='last2'>
            <div class='p3 loc3 loc33'>
               <p class='border3'>Enter your location</p>
                <p>Your location will help us serve better and extend a personalized experience.</p>
            </div>
    
            <div class='lists'>
                <h2>RECOMMENDED GROUPS</h2>
                <!-- Recommended Group 1 -->
                <div class='flex-btw flex-lists'>
                    <img src="./l1.jpeg" alt="Leisure Group Image">
                    <div class='leisure'>
                        <p>Leisure</p>
                    </div>
                    <button class='follow'>Follow</button>
                </div>
                <!-- Recommended Group 2 -->
                <div class='flex-btw flex-lists'>
                    <img src="./l2.jpeg" alt="Activism Group Image">
                    <div class='leisure'>
                        <p>Activism</p>
                    </div>
                    <button class='follow'>Follow</button>
                </div>
                <!-- Recommended Group 3 -->
                <div class='flex-btw flex-lists'>
                    <img src="./l3.jpeg" alt="MBA Group Image">
                    <div class='leisure'>
                        <p>MBA</p>
                    </div>
                    <button class='follow'>Follow</button>
                </div>
                <!-- Recommended Group 4 -->
                <div class='flex-btw flex-lists'>
                    <img src="./l4.jpeg" alt="Theory Group Image">
                    <div class='leisure'>
                        <p>Theory</p>
                    </div>
                    <button class='follow'>Follow</button>
                </div>
            </div>
        </div>
    </div>
    
    <div class='feed'>
    <img src="./pic2.jpg" alt="Education Image">
    <h4>Education</h4>
    <div class='flex-btw'>
        <h3>Tax Benefits for Investment under National Pen<br>Scheme launched by Government</h3>
        </div>
    <p>I've worked in UX for the better part of a decade. From now on, I plan to rei..</p>
    <img class='dp' src="./dp2.jpeg" alt="Author's Profile Image">
    <h4 class='username'>Sarah West</h4>
    <div class='flex-btw'>
        <p class='views'>1.4k views</p>
   </div>
</div>


<div class='feed'>
    <img src="./pic3.jpg" alt="Meetup Image">
    <h4>Meetup</h4>
    <div class='flex-btw'>
        <h3>Finance & Investment Elite Social Mixer Website<br>@Lujiazui</h3>
      </div>
    <div class='more3'>
        <div class='p3'>
            <p><nobr>Fri, 12 Oct, 2018</nobr></p>
        </div>

        <div class='p3 loc3'>
            <p><nobr>Ahmedabad, India</nobr></p>
        </div>
    </div>
    <button class='meetup'>Visit Website</button>
    <div class='test3'>
        <img class='dp dp3' src="./dp3.jpeg" alt="Author's Profile Image">
        <h4 class='username username3'>Ronal Jones</h4>
    </div>

    <div class='flex-btw flex-btw3'>
        <p class='views views3'>1.4k views</p>
        </div>
</div>

<div class='feed'>
    <h4>Job</h4>
    <div class='flex-btw'>
        <h3>Software Development</h3>
        </div>
    <div class='more3'>
        <div class='p3'>
            <p><nobr>Innovaccer Analytics Private Ltd.</nobr></p>
        </div>

        <div class='p3 loc3'>
            <p><nobr>Noida, India</nobr></p>
        </div>
    </div>
    <button class='meetup' style='color: green;'>Apply on Timesjobs</button>
    <div class='test3'>
        <img class='dp dp3 dp4' src='./dp1.jpeg' alt="Joseph Gray's Profile Image">
        <h4 class='username username3'>Joseph Gray</h4>
    </div>

    <div class='flex-btw flex-btw3'>
        <p class='views views3'>1.4k views</p>
   </div>
</div>

    </section>
        `;
        root.innerHTML = html;

        // Attach event listeners
        const createAccountButton = document.getElementById('createAccount');
        createAccountButton.addEventListener('click', handleCreateAccountClick);

        // Conditional rendering of the Popup
        if (isPopupVisible) {
            // Assuming Popup is a function that displays a popup
            Popup(handlePopupClose, isPopupVisible, isSignUp);
        }

        // Attach event listener for Leave Group button
        const leaveGroupButton = document.getElementById('leaveGroupBtn');
        leaveGroupButton.addEventListener('click', (event) => handleSubmit(event));
    }

    // Simulating componentDidMount using useEffect
    useEffect(() => {
        // Initial render
        render();
    }, []);

    return {
        handleCreateAccountClick,
        handlePopupClose,
        handleSubmit
    };
}

// Create an instance of the Start component
const startComponent = Start();

document.getElementById('createAccount').addEventListener('click', startComponent.handleCreateAccountClick);
document.getElementById('submitBtn').addEventListener('click', startComponent.handleSubmit);
document.getElementById('leaveGroupBtn').addEventListener('click', startComponent.handleSubmit);