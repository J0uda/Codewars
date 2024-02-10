# Big O

```c
 int pairSumSequence(int n) {
 int sum = 0;
  for (inti= 0; i < n; i++) {
    sum+= pairSum(i, i + 1) }
 return sum;
 }
 int pairSum(int a, int b) {
 return a+ b;
 }
```

<details>
  <summary>Click For Solution</summary>
There will be roughly O(n) calls to pairSum. However, those calls do not exist simultaneously on the call
stack, so you only need O ( 1) space.

</details>

```c
void foo(int[] array) {
  int sum = 0;
  int product = 1;
    for (inti= 0; i < array.length; i++) {
      sum += array[i);
    }
    for (int i= 0; i < array.length; i++) {
      product*= array[i];
    }
 System.out.println(sum + ", " + product);
  }
```

<details>
  <summary>Click For Solution</summary>
This will take O(N) time. The fact that we iterate through the array twice doesn't matter.
</details>

```c
void printPairs(int[] array) {
 for (int i= 0; i < array.length; i++) {
   for (int j = 0; j < array.length; j++) {
    System.out.println(array[i] + "," + array[j]);
  }
 }
}
```

<details>
  <summary>Click For Solution</summary>
The inner for loop has O(N) iterations and it is called N times. Therefore, the runtime is O (N2).
</details>

```c
int product(int a, int b) {
  int sum = 0;
  for (int i= 0; i < b; i++) {
    sum += a;
  }
return sum;
```

<details>
  <summary>Click For Solution</summary>
   O(b). The for loop just iterates through b.
</details>

```c
int power(int a, int b) {

if (b < 0) {
  return 0;
 } else if (b == 0) {
  return 1;
 } else {
  return a* power(a, b - 1);
  }
}
```

<details>
  <summary>Click For Solution</summary>
O(b). The recursive code iterates through b calls, since it subtracts one at each level.
</details>

```c
int mod(int a, int b) {
  if (b <= 0) {
    return -1;
  }
  int div = a I b;
  return a - div * b;
}
```

<details>
  <summary>Click For Solution</summary>
O(1). It does a constant amount of work.
</details>

```c
int div(int a, int b) {
int count = 0;
int sum = b· ,
while (sum <= a) {
sum += b;
count++;
}
return count;
}
```

<details>
  <summary>Click For Solution</summary>
O(a/b). The variable count will eventually equal a/b. The while loop iterates count times. Therefore, it
iterates a/b times.
</details>

```c
int sumDigits(int n) {
int sum = 0;
while (n > 0) {
sum += n % 10;
n /= 10;
}
return sum;
}
```

<details>
  <summary>Click For Solution</summary>

O(log n). The runtime will be the number of digits in the number. A number with d digits can have a
value up to 10d
. If n = 10 pw d
, then d = log n. Therefore, the runtime is O(log n).

</details>
