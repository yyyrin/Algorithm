# [BOJ] 11050. 이항 계수 1

## 틀린 코드 ##
# import sys
# N, K = map(int, sys.stdin.readline().split())
# if N == K:
#     ans = 1
# else:
#     head = N
#     bottom = 1
#     for i in range(1, K):
#         head *= (N-i)
#     if K != 0:
#         for i in range(1, K+1):
#             bottom *= i
#     ans = head//bottom
#     print(head)
#     print(bottom)
# print(ans)
#--------------------------
# 재귀문 사용 #
# import sys
#
# def factorial(n):
#     if n == 0:
#         return 1
#     return n * factorial(n-1)
#
# n, k = map(int, sys.stdin.readline().split())
# print(factorial(n) // (factorial(k) * factorial(n-k)))
#-----------------------------
# 반복문 #
from sys import stdin
def factorial(n):
    if n == 0:
        return 1
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

n, k = map(int, stdin.readline().split())
print(factorial(n) // (factorial(k) * factorial(n - k)))